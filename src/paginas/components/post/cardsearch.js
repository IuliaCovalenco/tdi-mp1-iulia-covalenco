import React, { Component } from 'react';
import { connect } from 'react-redux';


import { fetchCard, setLoading } from '../../actions/search.js';



export class Card extends Component {
  componentDidMount() {
    this.props.fetchCard(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, card } = this.props;

    let cardName = (
        <Container className="container-fluid w-100 "> 
        
            <Header/>
            <Row>
            <Section className="col-lg-6 col-md-6" style={{ backgroundColor: '#7f5e67' }}></Section>
            </Row>
            <Row>
            <Cool className="col-lg-6 col-md-6 col-sm-12">
                <h1><i>{card.name}</i></h1>
                <h2>{card.setName}</h2>
                <h3>{card.rarity}</h3>
                <p style={{ fontSize: '1.5rem'}}>{card.text}</p>
                <P>Artist: <i>{card.artist}</i></P>
                </Cool>
            </Row> 
            <Row>
            <Coool className="col-lg-6 col-md-6"></Coool>
            </Row>   
            <Footer />
        </Container>
    );

    let content = loading ? loading : cardName;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.cards.loading,
  card: state.cards.card
});

export default connect(
  mapStateToProps,
  { fetchCard, setLoading }
)(Card);