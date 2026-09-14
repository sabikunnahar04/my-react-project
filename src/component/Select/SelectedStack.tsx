import React from 'react';
import type { IPlayer } from '../../Types/player';

interface SelectedStackProps {
    selectedPlayers: IPlayer[];
    onRemove: (id: string | number) => void;
    onRemoveAll: () => void;
}

const SelectedStack = ({ selectedPlayers, onRemove, onRemoveAll }: SelectedStackProps) => {
    return (
        <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-fit sticky top-24">
            <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
            
           
            {selectedPlayers.length === 0 ? (
                <>
                    <p className="text-xs text-gray-400 mt-1 mb-6">No technologies selected yet.</p>
                    
                    <div className="border-2 border-dashed border-gray-200 rounded-2xl py-10 flex items-center justify-center text-center">
                        <p className="text-xs text-gray-400 font-medium">Your stack is empty.</p>
                    </div>
                </>
            ) : (
              
                <>
                    <p className="text-xs text-gray-500 mt-1 mb-4">
                        {selectedPlayers.length} Technology Selected
                    </p>

                    <div className="space-y-3 mb-6">
                        {selectedPlayers.map((player) => (
                            <div key={player.id} className="flex items-center justify-between border border-gray-100 p-3 rounded-xl bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <img src={player.icon} alt={player.name} className="w-6 h-6 object-contain" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-800">{player.name}</h4>
                                        <span className="text-[10px] text-gray-500">{player.badge}</span>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => onRemove(player.id)}
                                    className="text-gray-400 hover:text-red-500 text-sm font-bold transition-colors px-2"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={onRemoveAll}
                        className="w-full border border-red-200 text-red-500 hover:bg-red-50 py-2 rounded-xl text-sm font-medium transition-colors"
                    >
                        Remove All
                    </button>
                </>
            )}
        </div>
    );
};

export default SelectedStack;