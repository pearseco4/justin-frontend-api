import React,{ useEffect, useState }  from "react";


function FetchPokemon({pokemonList, setPokemonList}) {
    const [index, setIndex] = useState(0);
    
    const [grassOnly, setGrassOnly] = useState(false);
    const [fireOnly, setFireOnly] = useState(false);
    const [waterOnly, setWaterOnly] = useState(false);
    const [bugOnly, setBugOnly] = useState(false);

    useEffect(() => {
        const apiUrl = `https://pokemonapi-production-04ea.up.railway.app/pokemon`;
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
          setPokemonList(data)
          })
          .catch(err => console.log(err))
    }, [])

    const visibleArr = pokemonList.slice(index, index + 100);

    const handleNext = () => {
      setIndex(index + 100)
    };

    const handlePrev = () => {
     setIndex(index - 100)
    };

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
    ? visibleArr.filter((pokemon) => 
    (grassOnly && pokemon.type1 === "Grass") ||
    (fireOnly && pokemon.type1 === "Fire") || 
    (waterOnly && pokemon.type1 === "Water") ||
    (bugOnly && pokemon.type1 === "Bug")
    )  
    : visibleArr;



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
      <button onClick={handleNext} disabled={index + 100>=pokemonList.legnth}>Next</button>
      <button onClick={handlePrev} disabled={index === 0}>Previous</button>
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