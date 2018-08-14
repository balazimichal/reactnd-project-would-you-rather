import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return <header className="header">
          <div className="wrapper">
            <nav className="main-nav">
              <Link to="/">
                Home
              </Link>
              <Link to="/add">
                New Question
              </Link>
              <Link to="/leaderboard">
                Leaderboard
              </Link>
            </nav>

            <nav className="login-nav">
              <Link to="/login">
                Login
              </Link>
            </nav>
          </div>
        </header>;
  }
}

export default Header