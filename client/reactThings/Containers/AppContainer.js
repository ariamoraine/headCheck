import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className='title'>Welcome To Initial Exam</div>
        <Link to={'/add'}>Add an entry</Link>
        <div />
        <Link to={'/view'}>View all entries</Link>
      </div>
    )
  }
}
