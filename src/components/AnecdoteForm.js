import React from 'react'
import { useDispatch } from 'react-redux'
import { newObject } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const add = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(newObject(content))
        dispatch(setNotification(`You added note '${content}'`, 5000))
    }

    return (
        <div>
            <form onSubmit={add}>
                <h3>create new</h3>
                <input name="anecdote" />
                <button type="submit">create</button>
            </form>
            <br />
        </div>
    )
}

export default AnecdoteForm