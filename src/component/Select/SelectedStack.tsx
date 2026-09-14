import React from 'react';
import type { IPlayer } from '../../Types/player';

interface SelectedStackProps {
    selectedPlayers: IPlayer[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const SelectedStack = ({ selectedPlayers, onRemove, onRemoveAll }: SelectedStackProps) => {
    return (
        <div className="w-full lg:w-80 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm h-fit sticky top-6">
            <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
            <p className="text-xs text-gray-500 mb-4">{selectedPlayers.length} Technology Selected</p>

            <div className="space-y-3 mb-6">
                {selectedPlayers.map((player) => (
                    <div key={player.id} className="flex items-center justify-between border border-gray-100 p-3 rounded-xl bg-gray-50">
                        <div className="flex items-center gap-3">
                            <img src={player.icon} alt={player.name} className="w-6 h-6 object-contain" />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-800">{player.name}</h4>
                                <span className="text-[10px] text-gray-500">{player.category}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => onRemove(player.id)}
                            className="text-gray-400 hover:text-red-500 text-lg font-bold transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            {selectedPlayers.length > 0 && (
                <button 
                    onClick={onRemoveAll}
                    className="w-full border border-red-200 text-red-500 hover:bg-red-50 py-2 rounded-xl text-sm font-medium transition-colors"
                >
                    Remove All
                </button>
            )}
        </div>
    );
};

export default SelectedStack;