import { Suspense } from "react";
import Bannar from "./component/Bannar"
import Nav from "./component/Nav"
import Players from "./component/Players/Players";
import Text from "./component/Text"
import type { IPlayer } from "./Types/player";

const playersFetch = async():Promise<IPlayer[]>=> {
  const res = await fetch ("/data.json");
  const data = await res.json();
  return data ;
}

function App() {
const playersPromise=playersFetch() ; 

  return (
    <>
    <Nav/>
    <Bannar/>
    <Text/>
    <Suspense fallback={<h2>Loading ....</h2>}>
    <Players playersPromise={playersPromise}/>

    </Suspense>
    </>
  )
}

export default App
