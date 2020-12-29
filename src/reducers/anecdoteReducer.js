import anecdoteService from '../services/anecdotes'

export const newObject = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data : newAnecdote,
    })
  }
}

export const vote = (id) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const findAnecdote = anecdotes.find(n => n.id === id)
    const content = { ...findAnecdote, votes: findAnecdote.votes + 1}
  await anecdoteService.updateObject(id, content)
  dispatch({
    type: 'VOTE',
    data: content,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}
const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data]

    case 'VOTE': {
      const id = action.data.id
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.data)
    }
    case 'INIT': 
    return action.data

    default:
      return state;
  }
}

export default anecdoteReducer