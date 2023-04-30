import { useState, useEffect, useRef } from 'react';
import axios from "axios";

async function Forms() {
    const nameRef = useRef();
    const typeRef = useRef();
    const hpRef = useRef();
    const attackRef = useRef();
    const defenseRef = useRef();
    const speedRef = useRef();
    const [message, setMessage] = useState("")

    const handleSubmit = async (event) =>
    event.preventDefault()
    const data = {
        name: nameRef.current.value,
        type1: typeRef.current.value,
        hp: hpRef.current.value,
        attack: attackRef.current.value,
        defense: defenseRef.current.value,
        speed: speedRef.current.value,
        }
        
    await axios.post("https://pokemonapi-production-04ea.up.railway.app/pokemon", data)
    setMessage("Pokemon has been submitted")
    nameRef.current.value = ""
    typeRef.current.value = ""
    hpRef.current.value = ""
    attackRef.current.value = ""
    defenseRef.current.value = ""
    speedRef.current.value = ""
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="enter name" 
            ref={nameRef}
            />
            <br />
            <input 
            placeholder="enter type" 
            ref={typeRef}
            />
            <br />
            <input 
            placeholder="enter hp"
            ref={hpRef}
            />
            <br />
            <input 
            placeholder="enter attack" 
            ref={attackRef}
            />
            <br />
            <input 
            placeholder="enter defense" 
            ref={defenseRef}
            />
            <br />
            <input 
            placeholder="enter speed" 
            ref={speedRef}
            />
            <input type="submit" value="submit"/>
            <br />
        </form>
    </div>
)
}

export default Forms; 