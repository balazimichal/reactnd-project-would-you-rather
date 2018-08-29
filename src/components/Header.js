import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ authedUser, users }) => (
  <header className="header">
    <div className="wrapper">
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/add">New Question</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>

      <nav className="login-nav">
        {authedUser === null ? (
          <span>
            <Link to="/login">Login</Link>
          </span>
        ) : (
          <span>
            <img src={users[authedUser].avatarURL} alt="" />
            Hello, {users[authedUser].name} <Link to="/logout">Logout</Link>
          </span>
        )}
      </nav>
    </div>
  </header>
);

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(Header);
