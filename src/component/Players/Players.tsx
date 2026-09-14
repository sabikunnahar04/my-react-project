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
            
        </div>
    );
};

export default Players;