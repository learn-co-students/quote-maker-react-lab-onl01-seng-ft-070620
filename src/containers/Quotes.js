import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  // renderQuotes = () => {
  //   this.props.quotes.map((quote) => (
  //     <QuoteCard key={quote.id} quote={quote} />
  //   ));
  // };

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    debugger;
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
              {/* {this.renderQuotes()} */}
              {quotes.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  quote={quote}
                  upvoteQuote={upvoteQuote}
                  downvoteQuote={downvoteQuote}
                  removeQuote={removeQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};

export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote,
})(Quotes);
