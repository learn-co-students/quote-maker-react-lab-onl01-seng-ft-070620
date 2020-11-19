export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      let newArray = []
      state.forEach((quote) => {
        if(quote.id !== action.quoteId)
        {
          newArray.push(quote) 
        } 
      })
      return newArray
    case 'UPVOTE_QUOTE':
      newArray=state.map((quote) => {
        if(quote.id === action.quoteId)
        {
          quote.votes += 1
        }
        return quote
      })
      return newArray
    case 'DOWNVOTE_QUOTE':
      newArray=state.map((quote) => {
        if(quote.id === action.quoteId && quote.votes > 0)
        {
          quote.votes -= 1
        }
        return quote
      })
      return newArray
    default: 
      return state;
  }
}
