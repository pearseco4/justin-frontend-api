import React from "react";
import Main from './Main.jsx';
import Header from './Header.jsx';
import Forms from "./Forms";
import { useState } from "react";


function App() {
  const [pokemonList, setPokemonList] = useState([])

  return (
    <>
    <Header />
    <Forms pokemonList={pokemonList} setPokemonList={setPokemonList}/>
    <Main pokemonList={pokemonList} setPokemonList={setPokemonList}/>
    </> 
  );
}

export default App;
