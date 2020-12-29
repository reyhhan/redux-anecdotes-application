import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(vote(anecdote.id))
        dispatch(setNotification(`You voted for '${anecdote.content}'`, 5000))
    }

    return (
        <li>
            {anecdote.content}
            <div>has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </li>
    )
}

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdote)
    const filteredKey = useSelector(state => state.filtered)


    const filteredAnecdote = (filteredKey !== '')
        ? anecdotes.filter(person => person.content.toLowerCase().includes(filteredKey.toLowerCase()))
        : anecdotes
    const sortedList = filteredAnecdote.sort((a, b) => b.votes - a.votes)
    
    return (
        <ul>
            {sortedList.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                />
            )}
        </ul>
    )
}

export default AnecdoteList