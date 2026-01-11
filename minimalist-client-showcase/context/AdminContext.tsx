import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveImageToDB, getAllImagesFromDB, clearImagesDB } from '../utils/db';

type TextContent = Record<string, string>;
type ImageContent = Record<string, string>;

interface AdminContextType {
    isEditing: boolean;
    toggleEditing: () => void;
    textContent: TextContent;
    imageContent: ImageContent;
    updateText: (key: string, value: string) => void;
    updateImage: (key: string, value: string) => void;
    saveConfig: () => void;
    resetConfig: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [textContent, setTextContent] = useState<TextContent>({});
    const [imageContent, setImageContent] = useState<ImageContent>({});

    // Load from storage on mount
    useEffect(() => {
        const savedText = localStorage.getItem('site_text_content');
        if (savedText) setTextContent(JSON.parse(savedText));

        // Load images from IndexedDB
        getAllImagesFromDB().then(images => {
            setImageContent(images);

            // Migration: Check if there are images in localStorage (old way) and move them to DB
            const oldImages = localStorage.getItem('site_image_content');
            if (oldImages) {
                try {
                    const parsed = JSON.parse(oldImages);
                    // Save to DB
                    Object.entries(parsed).forEach(([key, val]) => {
                        saveImageToDB(key, val as string);
                    });
                    // Merge with DB images
                    setImageContent(prev => ({ ...prev, ...parsed }));
                    // Clear old storage
                    localStorage.removeItem('site_image_content');
                } catch (e) {
                    console.error("Migration error", e);
                }
            }
        }).catch(err => console.error("Failed to load images from DB", err));
    }, []);

    const toggleEditing = () => setIsEditing(prev => !prev);

    const updateText = (key: string, value: string) => {
        setTextContent(prev => {
            const newContent = { ...prev, [key]: value };
            localStorage.setItem('site_text_content', JSON.stringify(newContent));
            return newContent;
        });
    };

    const updateImage = (key: string, value: string) => {
        // 1. Update React State immediately for UI feedback
        setImageContent(prev => ({ ...prev, [key]: value }));

        // 2. Persist to IndexedDB asynchronously
        saveImageToDB(key, value).catch(err => {
            console.error("Failed to save image to DB", err);
            alert("Failed to save image. It will persist until refresh.");
        });
    };

    const saveConfig = () => {
        const config = {
            text: textContent,
            images: imageContent
        };
        const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'site-config.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    const resetConfig = async () => {
        if (window.confirm("Are you sure you want to reset all changes?")) {
            setTextContent({});
            setImageContent({});
            localStorage.removeItem('site_text_content');
            await clearImagesDB();
        }
    };

    return (
        <AdminContext.Provider value={{
            isEditing,
            toggleEditing,
            textContent,
            imageContent,
            updateText,
            updateImage,
            saveConfig,
            resetConfig
        }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};
