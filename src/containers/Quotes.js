import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes'
import { upvoteQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes'



class Quotes extends Component {

  renderCards = () => {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    return quotes.map(q => {
      return <QuoteCard 
      quote={q}
      // key={q.id}
      upvoteQuote={upvoteQuote}
      removeQuote={removeQuote}
      downvoteQuote={downvoteQuote}
      />
    })
  }

  render() {
    
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              {this.renderCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: quoteId => {dispatch(removeQuote(quoteId))},
    upvoteQuote: quoteId => {dispatch(upvoteQuote(quoteId))},
    downvoteQuote: quoteId => {dispatch(downvoteQuote(quoteId))}
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
