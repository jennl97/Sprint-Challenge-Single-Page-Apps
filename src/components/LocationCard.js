import React from "react";
import {card, Icon, Image, Card } from 'semantic-ui-react';


export default function LocationCard(props) {
  // console.log(props);
  return (
    <Card>
      <Card.Content>
        <Card.Description>Planet Name: {props.name}</Card.Description>
        <Card.Description>Planet Type: {props.type}</Card.Description>
        <Card.Description>Planet Dimension: {props.dimension}</Card.Description>
      </Card.Content>
    </Card>
  )
}
