import React from 'react';
import {card, Icon, Image, Card } from 'semantic-ui-react';


function EpisodeCard(props){
    return (
        <div>
 <Card>
      <Card.Content>
        <Card.Description>Name: {props.name}</Card.Description>
        <Card.Description>Air Date: {props.airDate}</Card.Description>
        <Card.Description>Episode Number: {props.episode}</Card.Description>
      </Card.Content>
    </Card>
        </div>
    )
}

export default EpisodeCard;