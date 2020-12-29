import React, { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
      dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2><u>Anecdotes</u></h2>
        <Notification />
        <Filter />
        <AnecdoteForm />
        <AnecdoteList />
    </div>
  )
}

export default App