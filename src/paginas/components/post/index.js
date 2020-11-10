import React from 'react';
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import '../../../App.css';
import Button from 'react-bootstrap/Button';
import { CardDeck } from 'react-bootstrap';





export default ({ name, layout, cmc, gameFormat,  artist }) => (
  

  <Col lg={4} className="mt-5"> 
  <Card className="card h-100" style={{width: '23rem', color: 'black'}}>
  <CardDeck>
      <Card.Body className="card h-100" style={{width: '23rem'}}>
          <Card.Title className="card.title">{name}</Card.Title>
          <Card.Text>{layout}</Card.Text>
          <Card.Text>{cmc}</Card.Text>
          <Card.Text>{gameFormat}</Card.Text>
          <Card.Text>{artist}</Card.Text>
      </Card.Body>
      </CardDeck>
      <Button href="/" style={{margin: '00.2rem' }} variant="outline-dark" fluid >See More</Button>
  </Card>
</Col>
)
