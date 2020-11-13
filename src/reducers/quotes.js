export default (state = [], action) => {
  let idx
  switch (action.type) {
    case 'ADD_QUOTE':
      return (
        [...state, {
          id: action.quote.id,
          content: action.quote.content,
          author: action.quote.author,
          votes: action.quote.votes
        }]
      )
    case 'REMOVE_QUOTE':
      idx = state.findIndex(q => q.id === action.quoteId)
      return [...state.slice(0,idx),...state.slice(idx+1)]
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(q => q.id === action.quoteId)
      return [...state.slice(0,idx), {...state[idx], votes: state[idx].votes+1}, ...state.slice(idx+1)]
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(q => q.id === action.quoteId)
      if (state[idx].votes === 0) {
        return state
      } else {
        return [...state.slice(0,idx), {...state[idx], votes: state[idx].votes-1}, ...state.slice(idx+1)]
      }
    default: return state
  }
}
