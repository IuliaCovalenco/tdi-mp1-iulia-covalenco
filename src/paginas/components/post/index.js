import React, { Component, useState } from 'react';
import Card from "react-bootstrap/esm/Card";
import '../../../App.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../../store/posts//actions/index.js';
import CardDeck from 'react-bootstrap/esm/CardDeck'
import Col from 'react-bootstrap/esm/Col'


export class Cards extends Component {

  render() {
    const { id, name, layout, cmc, artist, gameFormat } = this.props;
   
    return (
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
      <Link to={`/cards/${id}`} size="lg" ><Button size="lg" variant="outline-dark" style={{margin: '0.rem', width: '99.9%' }} fluid >
        See More 
      </Button></Link>
  </Card>
</Col>
    );
  }
}


const mapStateToProps = state => ({
  card: state.cards.card
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Cards);