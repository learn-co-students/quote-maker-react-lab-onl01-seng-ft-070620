import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuoteCard from './QuoteCard'
import {upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {
    constructor() {
        super()
        this.handleUpvote = this.handleUpvote.bind(this)
        this.handleDownvote = this.handleDownvote.bind(this)
    }

    handleUpvote = (id) => {
        this.props.upvoteQuote(id)
    }

    handleDownvote = (id) => {
        this.props.downvoteQuote(id)
    }

    render() {
        return (
            <React.Fragment>
               {this.props.quotes.map(q => <QuoteCard 
                                                key={q.id}
                                                id={q.id} 
                                                quote={q} 
                                                handleUpvote={this.handleUpvote} 
                                                handleDownvote={this.handleDownvote} />)} 
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {quotes: state.quotes}
}

const mapDispatchToProps = dispatch => {
    return {
        upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
        downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)