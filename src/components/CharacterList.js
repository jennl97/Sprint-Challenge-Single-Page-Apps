import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
 
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
            // console.log('axios: ',res.data.results );
            setCharacters(res.data.results);
        })
        .catch(err => {
            console.log('error: ', err);
        })
        

    },[])


  return (
    
    <section className="character-list grid-view">
     
      {characters.map((results, index) => {
        return <CharacterCard name = {results.name} status = {results.status} species = {results.species} gender = {results.gender}  image = {results.image} key={index}/>})}
    </section>
  );
}
