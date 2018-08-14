import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Header extends Component {





  render() {
    let button

    if (this.props.logedin === null) {
      button = <span><Link to="/login">Login</Link></span>
    } else {
      button = <span>Hello, {this.props.logedin} <Link to="/logout">Logout</Link></span>
    }




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
                {button}       
            </nav>
          </div>
        </header>;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    logedin: authedUser
  }
}

export default connect(mapStateToProps)(Header)