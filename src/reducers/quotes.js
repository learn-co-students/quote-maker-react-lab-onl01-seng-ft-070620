export default (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      return state.filter(q => q.id != action.quoteId)
    case "UPVOTE_QUOTE":
      return (
        state.map(q => {
          if (q.id === action.quoteId) {
            return {...q, votes: q.votes + 1}
          }
        })
      )
    case "DOWNVOTE_QUOTE":
      return (
        state.map(q => {
          if (q.id === action.quoteId && q.votes != 0) {
            return {...q, votes: q.votes - 1}
          } else {
            return q
          }
        })
      )
    default:
      return state;
  }
}
