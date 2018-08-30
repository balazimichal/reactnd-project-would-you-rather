import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  state = {
    user: 'none'
  };

  changeUser = e => {
    const user = e.target.value;
    this.setState(() => ({ user }));
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.user));
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="container content">
        <div className="row">
          <h1 className="center-align">Welcome to the Would You Rather App!</h1>
        </div>

        <div className="row">
          <div className="col s12 l6 offset-l3">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Please sign in to continue</span>
                <form onSubmit={this.handleLogin}>
                  <select
                    className="browser-default"
                    onChange={this.changeUser}
                    value={this.state.user}
                  >
                    <option value="none" disabled selected>
                      Choose user
                    </option>
                    {this.props.userIds.map(userId => (
                      <option key={userId} value={userId}>
                        {this.props.users[userId].name}
                      </option>
                    ))}
                  </select>

                  <button
                    className="waves-effect waves-light btn-large"
                    disabled={this.state.user === 'none'}
                  >
                    Sign In
                    <i className="material-icons right">arrow_right</i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
    users
  };
}

export default withRouter(connect(mapStateToProps)(Login));

/*
      <section>
        <div className="wrapper">
          <div className="box">
            <div className="box-header center">
              <h3>Welcome to the Would You Rather App!</h3>
              <h5>Please sign in to continue</h5>
            </div>

            <div className="box-content center">
              <h1>Sign in</h1>


              <form onSubmit={this.handleLogin}>
                <select onChange={this.changeUser} value={this.state.user}>
                  <option value="none" disabled defaultValue>
                    Select User
                  </option>
                  {this.props.userIds.map(userId => (
                    <option key={userId} value={userId}>
                      {this.props.users[userId].name}
                    </option>
                  ))}
                </select>
                
              </form>
            </div>
          </div>
        </div>
      </section>

*/
