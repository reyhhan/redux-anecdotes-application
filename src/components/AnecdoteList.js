import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote,props }) => {
    const handleClick = () => {
        props.vote(anecdote.id)
        props.setNotification(`You voted for '${anecdote.content}'`, 5000)
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

const AnecdoteList = (props) => {
    return (
        <ul>
            {props.anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    props = {props}
                />
            )}
        </ul>
    )
}
const mapStateToProps = (state) => {
    if (state.filtered !== '') {
        return {
            anecdotes: state.anecdote.filter(person => person.content.toLowerCase()
                .includes(state.filtered.toLowerCase()))
                .sort((a, b) => b.votes - a.votes)
        }
    }
    return {
        anecdotes: state.anecdote.sort((a, b) => b.votes - a.votes)
    }

}

const mapDispatchToProps = {
    vote,
    setNotification
}
const ConnectedNotes = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)

export default ConnectedNotes