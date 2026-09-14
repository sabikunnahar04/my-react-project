import React from 'react';
import type { IPlayer } from '../../Types/player';

interface CardProps {
    player: IPlayer;
    isSelected: boolean;
    onSelectPlayer: (player: IPlayer) => void;
}

const Card = ({ player, isSelected, onSelectPlayer }: CardProps) => {
    return (
        <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <img src={player.icon} alt={player.name} className="w-10 h-10 object-contain" />
                    <span className="bg-sky-100 text-sky-600 text-xs px-3 py-1 rounded-full font-semibold">
                        {player.badge}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{player.name}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                    {player.description}
                </p>
            </div>

            <div>
                <button 
                    onClick={() => onSelectPlayer(player)}
                    disabled={isSelected}
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isSelected 
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
                            : "bg-[#0f172a] hover:bg-[#1e293b] text-white"
                    }`}
                >
                    {isSelected ? "Selected" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default Card;