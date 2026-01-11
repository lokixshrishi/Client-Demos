import React, { useState, useRef } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Upload } from 'lucide-react';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    id: string;
    defaultSrc: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
    id,
    defaultSrc,
    className = '',
    alt,
    ...props
}) => {
    const { isEditing, imageContent, updateImage } = useAdmin();
    const src = imageContent[id] || defaultSrc;
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        if (!isEditing) return;
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const processFile = async (file: File) => {
        if (file && file.type.startsWith('image/')) {
            try {
                // Read original file directly without compression
                const dataUrl = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (e) => resolve(e.target?.result as string);
                    reader.onerror = (e) => reject(e);
                    reader.readAsDataURL(file);
                });

                updateImage(id, dataUrl);
            } catch (error) {
                console.error("Failed to process image", error);
                alert("Failed to process image. Please try another one.");
            } finally {
                setIsDragging(false);
            }
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        if (!isEditing) return;
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        processFile(file);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (isEditing) {
            e.preventDefault(); // Prevent link navigation if inside 'a' tag
            fileInputRef.current?.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            processFile(file);
        }
    };

    return (
        <div
            className={`relative ${className} ${isEditing ? 'cursor-pointer group' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
        >
            <img
                src={src}
                alt={alt}
                className={`${className} ${isEditing ? 'opacity-50' : ''}`}
                {...props}
            />

            {isEditing && (
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${isDragging ? 'bg-blue-500/30 opacity-100' : 'bg-black/20 opacity-0 group-hover:opacity-100'}`}>
                    <div className="bg-white p-3 rounded-full shadow-lg">
                        <Upload size={20} className="text-neutral-900" />
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                    />
                </div>
            )}

            {isEditing && isDragging && (
                <div className="absolute inset-0 border-4 border-blue-500 rounded-lg animate-pulse pointer-events-none" />
            )}
        </div>
    );
};
