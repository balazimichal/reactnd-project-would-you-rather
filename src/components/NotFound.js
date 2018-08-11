import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <section>
        <div className='wrapper'>
          <h3>Page not found</h3>
          <p>You can return <Link to="/">home</Link>.</p>
        </div>
      </section>
    )
  }
}
