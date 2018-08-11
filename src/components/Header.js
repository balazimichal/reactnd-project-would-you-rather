import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return <header className="header">
          <div className="wrapper">
            <nav className="main-nav">
              <Link to="/" activeClassName="current">
                Home
              </Link>
              <Link to="/add" activeClassName="current">
                New Question
              </Link>
              <Link to="/leaderboard" activeClassName="current">
                Leaderboard
              </Link>
            </nav>

            <nav className="login-nav">
              <Link to="/" activeClassName="current">
                Login
              </Link>
            </nav>
          </div>
        </header>;
  }
}

export default Header