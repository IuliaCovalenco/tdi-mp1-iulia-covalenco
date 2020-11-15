import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    searchCard,
    fetchCards,
    setLoading
  } from '../../../store/posts/actions/search.js';

  export class SearchForm extends Component {
    onChange = (e) => {
      this.props.searchCard(e.target.value);
    };
  
    onSubmit = (e) => {
      e.preventDefault();
      this.props.fetchCards(this.props.text);
      this.props.setLoading();
    };
  
    render() {
      return (
        <div className="pt-5 jumbotron-fluid mt-5 text-center">
          <div className="container">
            <h1 className="display-4 mb-3">
              <i className="fa fa-search" /> Search for a card
            </h1>
            <form id="searchForm" onSubmit={this.onSubmit}>
              <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Search for a card"
                onChange={this.onChange}
              />
              <button type="submit" className="btn btn-primary btn-bg mt-3">
                Search
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    text: state.cards.text
  });
  
  export default connect(
    mapStateToProps,
    { searchCard, fetchCards, setLoading }
  )(SearchForm);
