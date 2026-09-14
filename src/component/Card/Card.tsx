import React, { useState } from 'react';
import type { IPlayer } from '../../Types/player';

interface PlayerCardProps {
    player: IPlayer;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white flex flex-col justify-between cursor-pointer">
            <div>
                {/* Top Section: Icon & Badge */}
                <div className="flex justify-between items-start mb-4">
                    <img src={player.icon} alt={player.name} className="w-10 h-10 object-contain" />
                    <span className="bg-sky-100 text-sky-600 text-xs px-3 py-1 rounded-full font-semibold">
                        {player.badge}
                    </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{player.name}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                    {player.description}
                </p>
            </div>

            <div>
                {/* Category, Difficulty & Rating */}
                <div className="flex items-center gap-2 mb-5 text-xs text-gray-600">
                    <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                        {player.category}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                        {player.difficulty}
                    </span>
                    <span className="ml-auto font-bold text-gray-800 flex items-center gap-1 text-sm">
                        ⭐ {player.rating}
                    </span>
                </div>

                {/* Button */}
                <button 
                    onClick={() => setIsSelected(true)}
                    disabled={isSelected}
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isSelected 
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
                            : "bg-[#0f172a] hover:bg-[#1e293b] text-white"
                    }`}
                >
                    {isSelected ? "Selected" : "Choose Player"}
                </button>
            </div>
        </div>
    );
};

export default PlayerCard;