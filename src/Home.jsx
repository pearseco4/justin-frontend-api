import React, { useEffect, useState, axios } from "react";
 
const Home = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [url, setUrl] = useState("https://pokemonapi-production-04ea.up.railway.app/pokemon");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokemonDex, setPokemonDex] = useState();

    const pokemonFun = async() => {
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
    }

    const getPokemon = async (res) => {
        res.map(async(item) => {
            const result = await axios.get(item.url)
            setPokemonData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1: -1)

                return state
            })
        })
    }

    useEffect(() => {
        pokemonFun();
    }, [url])
    return(
    <div className="container">

    <h1>Pick a generation</h1>
        <div className="generations">
            { nextUrl && <button onClick = {() => {
                setPokemonData([])
                setUrl(nextUrl)
            }}>I</button>}
            { nextUrl && <button onClick = {() => {
                setPokemonData([])
                setUrl(nextUrl)
            }}>II</button>}
            { nextUrl && <button onClick = {() => {
                setPokemonData([])
                setUrl(nextUrl)
            }}>III</button>}
            { nextUrl && <button onClick = {() => {
                setPokemonData([])
                setUrl(nextUrl)
            }}>IV</button>}
            { nextUrl && <button onClick = {() => {
                setPokemonData([])
                setUrl(nextUrl)
            }}>V</button>}
            { nextUrl && <button onClick = {() => {
                setPokemonData([])
                setUrl(nextUrl)
            }}>VI</button>}
            { nextUrl && <button onClick = {() => {
                setPokemonData([])
                setUrl(nextUrl)
            }}>VII</button>}
            { nextUrl && <button onClick = {() => {
                setPokemonData([])
                setUrl(nextUrl)
            }}>VIII</button>}
        </div>

        <div className="top content" key = {item.id} onClick = {()=> infoPokemon(item)}>
            <h2>{item.id}</h2>
            <img src = {item.sprites.front_defaul} alt = ""/>
            <h2>{item.name}</h2>
        </div>
            
    </div>

    ) 
} 

export default Home;