import React, { use } from 'react';
import type { IPlayer } from '../../Types/player';
import Card from '../Card/Card';

interface PlayersProps {
    playersPromise: Promise<IPlayer[]>;
    selectedPlayers: IPlayer[];
    onSelectPlayer: (player: IPlayer) => void;
}

const Players = ({ playersPromise, selectedPlayers, onSelectPlayer }: PlayersProps) => {
    const players = use(playersPromise);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
            {players.map((player) => (
                <Card 
                    key={player.id} 
                    player={player}
                    isSelected={selectedPlayers.some((p) => p.id === player.id)}
                    onSelectPlayer={onSelectPlayer}
                />
            ))}
        </div>
    );
};

export default Players;