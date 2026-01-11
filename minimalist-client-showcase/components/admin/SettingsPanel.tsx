import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Settings, Save, RotateCcw, X, Edit3 } from 'lucide-react';

export const SettingsPanel: React.FC = () => {
    const { isEditing, toggleEditing, saveConfig, resetConfig } = useAdmin();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {isOpen && (
                <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 p-4 w-64 mb-2 animate-in slide-in-from-bottom-5 fade-in duration-200">
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-neutral-100">
                        <h3 className="font-semibold text-neutral-900">Site Settings</h3>
                        <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-neutral-900">
                            <X size={16} />
                        </button>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={toggleEditing}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isEditing ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
                        >
                            <Edit3 size={16} />
                            {isEditing ? 'Done Editing' : 'Edit Mode'}
                        </button>

                        <button
                            onClick={saveConfig}
                            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                        >
                            <Save size={16} />
                            Save/Export Changes
                        </button>

                        <button
                            onClick={resetConfig}
                            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <RotateCcw size={16} />
                            Reset All
                        </button>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 text-[10px] text-neutral-400">
                        Changes are saved to browser storage automatically.
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform active:scale-95"
            >
                <Settings size={20} />
            </button>
        </div>
    );
};
