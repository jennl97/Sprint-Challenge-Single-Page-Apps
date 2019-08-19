import React, { useEffect, useState } from "react";
import axios from 'axios';

//import component
import EpisodeCard from './EpisodeCard';


function EpisodeList(){
    //set useState
    let [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
     
            axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(res => {
                // console.log('axios: ',res.data.results );
                setEpisodes(res.data.results);
            })
            .catch(err => {
                console.log('error: ', err);
            })
            
    
        },[])
    
    
      return (
        
        <section className="character-list grid-view">
         
          {episodes.map((results, index) => {
           return <EpisodeCard name = {results.name} airDate = {results.air_date} episode = {results.episode}  key={index}/>})}
        </section>
      );
}

export default EpisodeList;