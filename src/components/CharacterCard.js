import React from "react";
import {card, Icon, Image, Card } from 'semantic-ui-react';
import { from } from "rxjs";


export default function CharacterCard(props) {
// console.log('props: ',props);

  return (
    <div>
      <Card>
        <Image src={props.image} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>Status: {props.status}</Card.Description>
          <Card.Description>Species: {props.species}</Card.Description>
          <Card.Description>Gender: {props.gender}</Card.Description>
        </Card.Content>


      </Card>
   
    </div>
  )
  }
