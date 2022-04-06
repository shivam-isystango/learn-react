import React, { useEffect, useState } from 'react';
import axios from "axios";

const PokemonApi = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(()=>{
        async function getdata(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMoves(res.data.moves.length)
            console.log(num);
        }
        getdata();
    })
  return (
    <>
        <h3>You select {num}.</h3>
        <h3>{name} has {moves} moves.</h3>
        <select onChange={(e)=>{setNum(e.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="25">25</option>
        </select>
    </>
  )
}

export default PokemonApi