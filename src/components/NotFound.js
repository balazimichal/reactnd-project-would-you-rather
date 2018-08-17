import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <section>
      <div className='wrapper'>
        <h3>Page not found</h3>
        <p>You can return <Link to="/">home</Link>.</p>
      </div>
    </section>
  )
}
