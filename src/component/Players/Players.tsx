import React, { use } from 'react';
import type { IPlayer } from '../../Types/player';
import PlayerCard from '../Card/Card';
interface PlayersProps {
    playersPromise: Promise<IPlayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
            {players.map((player) => (
                <PlayerCard key={player.id} player={player}/>
            ))}
        </div>
    );
};

export default Players;