import { useState, useEffect, useRef } from 'react';
import axios from "axios";

function Forms({pokemonList, setPokemonList}) {
    const nameRef = useRef();
    const typeRef = useRef();
    const hpRef = useRef();
    const attackRef = useRef();
    const defenseRef = useRef();
    const speedRef = useRef();
    const [message, setMessage] = useState("");
    const[deleteMessage, setDeleteMessage] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {
        name: nameRef.current.value,
        type1: typeRef.current.value,
        hp: hpRef.current.value,
        attack: attackRef.current.value,
        defense: defenseRef.current.value,
        speed: speedRef.current.value,
      };
  
      try {
        const response = await axios.post("https://pokemonapi-production-04ea.up.railway.app/pokemon", data);
        setMessage("Pokemon has been created!");
        setPokemonList((prev) => [response, ...prev])
        nameRef.current.value = "";
        typeRef.current.value = "";
        hpRef.current.value = "";
        attackRef.current.value = "";
        defenseRef.current.value = "";
        speedRef.current.value = "";
      } catch (error) {
        setMessage("Error submitting Pokemon");
        console.error(error);
      }
    };
  
    const handleDelete = async (pokemonId) => {
        try {
          await axios.delete(`https://pokemonapi-production-04ea.up.railway.app/pokemon/${pokemonId}`);
          setDeleteMessage("Pokemon has been deleted :(");
          setPokemonList((prev) => prev.filter(pokemon => pokemon.id !== pokemonId));
        } catch (error) {
          setDeleteMessage("Error deleting Pokemon");
          console.error(error);
        }
    };
  
    return (
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <input className="inputBtn" placeholder="enter name" ref={nameRef} />
          <br />
          <input className="inputBtn"  placeholder="enter type" ref={typeRef} />
          <br />
          <input className="inputBtn"  placeholder="enter hp" ref={hpRef} />
          <br />
          <input className="inputBtn"  placeholder="enter attack" ref={attackRef} />
          <br />
          <input className="inputBtn"  placeholder="enter defense" ref={defenseRef} />
          <br />
          <input className="inputBtn"  placeholder="enter speed" ref={speedRef} />
          <br />
          <input className="inputBtn"  type="submit" value="submit" />
          <br />
          <br />
        </form>
          <button className='inputBtn' onClick={handleDelete}></button>
        {message && <p>{message}</p>}
        {}
      </div>
    );
  }
  
  export default Forms;
  