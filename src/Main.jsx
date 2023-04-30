import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function FetchPokemon() {
    const [pokemonList, setPokemonList] = useState([])

    const [grassOnly, setGrassOnly] = useState(false);
    const [fireOnly, setFireOnly] = useState(false);
    const [waterOnly, setWaterOnly] = useState(false);
    const [bugOnly, setBugOnly] = useState(false);

    useEffect(() => {
        fetch("https://pokemonapi-production-04ea.up.railway.app/pokemon")
        .then(response => response.json())
        .then(data => setPokemonList(data))
        .catch(err => console.log(err))
    }, [])

    const toggleGrassOnly = () => {
      setGrassOnly(!grassOnly);
    }

    const toggleFireOnly = () => {
      setFireOnly(!fireOnly);
    }
    
    const toggleWaterOnly = () => {
      setWaterOnly(!waterOnly);
    }

    const toggleBugOnly = () => {
      setBugOnly(!bugOnly);
    }

    const filteredList = (grassOnly || fireOnly || waterOnly || bugOnly)
    ? pokemonList.filter((pokemon) => 
    (grassOnly && pokemon.type1 === "Grass") ||
    (fireOnly && pokemon.type1 === "Fire") || 
    (waterOnly && pokemon.type1 === "Water") ||
    (bugOnly && pokemon.type1 === "Bug")
    )  
    : pokemonList;



return (
    <div>

      <div className="myButtons">
        <button onClick={toggleGrassOnly}>
          {grassOnly ? "Show All" : "Grass"}
        </button>
        <button onClick={toggleFireOnly}>
          {fireOnly ? "Show All" : "Fire"}
        </button>
        <button onClick={toggleWaterOnly}>
          {waterOnly ? "Show All" : "Water"}
        </button>
        <button onClick={toggleBugOnly}>
          {bugOnly ? "Show All" : "Bug"}
        </button>
      </div>

      <ul className="pokemonArray">

          {filteredList.map((pokemon) => (

          <div className="pokes" key={pokemon._id}>
            {pokemon.name} 
            <br />
            {pokemon.type1}
            <img src={pokemon.sprite} alt={`${pokemon.name} sprite`} />
            hp:{pokemon.hp} <br />
            attack:{pokemon.attack} <br />
            defense:{pokemon.defense} <br />
            speed:{pokemon.speed} <br />
          </div>

        ))}
      </ul>
    </div>
)
}
export default FetchPokemon