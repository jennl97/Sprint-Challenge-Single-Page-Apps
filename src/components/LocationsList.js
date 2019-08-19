import React, { useEffect, useState } from "react";
import axios from 'axios';

//import componnt
import LocationCard from './LocationCard';


export default function LocationsList() {
//set useState
let [locations, setLocations] = useState([]);

useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
 
        axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(res => {
            // console.log('axios: ',res.data.results );
            setLocations(res.data.results);
        })
        .catch(err => {
            console.log('error: ', err);
        })
        

    },[])


  return (
    
    <section className="character-list grid-view">
     
      {locations.map((results, index) => {
        return <LocationCard name = {results.name} type= {results.type} dimension= {results.dimension} key={index}/>})}
    </section>
  );

}
