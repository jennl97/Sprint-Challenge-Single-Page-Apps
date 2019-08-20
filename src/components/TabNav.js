import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Route } from 'react-router-dom';

//import pages
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";
import EpisodeList from "./EpisodeList";
import WelcomePage from "./WelcomePage";

// TODO: Add missing tabs below

const panes = [
    // {menuItem: 'Welcome', render: () => <Tab.Pane><Route exact path="/" component={WelcomePage}/></Tab.Pane>},
    {menuItem: 'Welcome', render: () => <Tab.Pane>{WelcomePage}</Tab.Pane>},
    {menuItem: 'Characters', render: () => <Tab.Pane><Route path="/characters" component={CharacterList}/></Tab.Pane>},
    {menuItem: 'Locations', render: () => <Tab.Pane><Route path="/locations" component={LocationList}/></Tab.Pane>},
    {menuItem: 'Episodes', render: () => <Tab.Pane><Route path="/episodes" component={EpisodeList}/></Tab.Pane>}
]

export default function TabNav() {
    
    return(
       <Tab panes={panes} />
   )
};

