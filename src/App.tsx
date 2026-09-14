import { Suspense, useState } from "react";
import Bannar from "./component/Bannar";
import Nav from "./component/Nav";
import Players from "./component/Players/Players";
import SelectedStack from "./component/Select/SelectedStack";
import Text from "./component/Text";
import type { IPlayer } from "./Types/player";
import { toast } from "react-toastify";
import Footer from "./component/Footer/Footer";

const playersFetch = async (): Promise<IPlayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [playersPromise] = useState(() => playersFetch());

  
  const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);

  
  const handleSelectPlayer = (player: IPlayer) => {
    if (!selectedPlayers.some((p) => p.id === player.id)) {
      setSelectedPlayers([...selectedPlayers, player]);
      toast.success(`${player.name} added to your stack!`);
    } else {
      
      toast.error(`${player.name} is already in your stack!`);
    }
  };

 const handleRemovePlayer = (id: string) => {
    const playerToRemove = selectedPlayers.find((p) => p.id === id);
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== id));
    
    
    if (playerToRemove) {
      toast.warn(`${playerToRemove.name} removed!`);
    }
  };

  return (
    <>
      <Nav />
      <Bannar />
      <Text />

      
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        
        <div className="lg:col-span-3">
          <Suspense fallback={<h2>Loading ....</h2>}>
            <Players 
              playersPromise={playersPromise} 
              selectedPlayers={selectedPlayers}
              onSelectPlayer={handleSelectPlayer}
            />
          </Suspense>
        </div>

        
        <div className="lg:col-span-1">
          <SelectedStack 
            selectedPlayers={selectedPlayers} 
            onRemove={handleRemovePlayer}
            onRemoveAll={() => setSelectedPlayers([])}
          />
        </div>

      </main>
      <Footer/>
    </>
  );
}

export default App;