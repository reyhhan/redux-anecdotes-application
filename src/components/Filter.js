import React from 'react'
import { connect } from 'react-redux'
import { filter } from '../reducers/filterReducer'

const Filter = (props) => {

  const handleChange = (event) => {
    event.preventDefault()
    const keyWord = event.target.value
    props.filter(keyWord)
  }

  const style = {
    marginBottom: 10,
    marginTop: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
const mapStateToProps = (state) => {
   return { filtered : state.filtered }
}
const mapDispatchToProps = {
    filter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)