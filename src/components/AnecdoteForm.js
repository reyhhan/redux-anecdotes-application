import React from 'react'
import { connect } from 'react-redux'
import { newObject } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const add = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.newObject(content)
        props.setNotification(`You added note '${content}'`, 5000)
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

const mapDispatchToProps = {
   newObject,
   setNotification
}
export default connect(
    null,
    mapDispatchToProps
)(AnecdoteForm)