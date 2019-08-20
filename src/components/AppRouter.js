import React from 'react';
import { Route } from 'react-router-dom';

//import component
import CharacterList from './CharacterList';
import LocationList from './LocationsList';
import EpisodeList from './EpisodeList';
import WelcomePage from './WelcomePage';
import { from } from "rxjs";

function AppRouter(){
    return(
        <div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/locations" component={LocationList} />
         <Route exact path="/episodes" component={EpisodeList} />
        </div>
    )
}

export default AppRouter;