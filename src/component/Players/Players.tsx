import React, { use } from 'react';
import type { IPlayer } from '../../Types/player';

interface PlayersProps {
    playersPromise : Promise<IPlayer[]>
}
const Players = ({playersPromise}: PlayersProps) => {
    console.log(playersPromise);
    const players = use(playersPromise);
    console.log(players,"players");
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
    {players.map((player) => (
        <div 
            key={player.id} 
            className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between"
        >
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
                <button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">
                    Add to Stack
                </button>
            </div>
        </div>
    ))}
</div>
        </div>
    );
};

export default Players;