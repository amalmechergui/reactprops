
import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <Card style={{ width: "16rem", margin: "15px", backgroundColor: "#f5f5f5"}}>
       <Card.Img variant="top" src={imageURL} alt={name} style={{ objectFit: "cover", height: "300px" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Player Name",
  team: "Team Name",
  nationality: "Nationality",
  jerseyNumber: "00",
  age: "Age",
  imageURL: "https://via.placeholder.com/150",
};

export default Player;