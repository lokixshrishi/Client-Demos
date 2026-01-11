import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from '../../context/AdminContext';

interface EditableTextProps {
    id: string;
    defaultText: string;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    multiline?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({
    id,
    defaultText,
    className = '',
    as: Component = 'span',
    multiline = false
}) => {
    const { isEditing, textContent, updateText } = useAdmin();
    const content = textContent[id] || defaultText;
    const [localValue, setLocalValue] = useState(content);

    useEffect(() => {
        setLocalValue(textContent[id] || defaultText);
    }, [textContent, defaultText, id]);

    const handleBlur = () => {
        if (localValue !== content) {
            updateText(id, localValue);
        }
    };

    if (isEditing) {
        if (multiline) {
            return (
                <textarea
                    value={localValue}
                    onChange={(e) => setLocalValue(e.target.value)}
                    onBlur={handleBlur}
                    className={`bg-blue-50/50 border border-blue-200 outline-none p-1 rounded hover:bg-blue-50 focus:bg-white focus:border-blue-400 w-full resize-y transition-colors ${className}`}
                    style={{ minHeight: '1.5em' }}
                />
            );
        }
        return (
            <input
                type="text"
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)}
                onBlur={handleBlur}
                className={`bg-blue-50/50 border border-blue-200 outline-none p-1 rounded hover:bg-blue-50 focus:bg-white focus:border-blue-400 w-full transition-colors ${className}`}
            />
        );
    }

    return (
        <Component className={className}>
            {content}
        </Component>
    );
};
