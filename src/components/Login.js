import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Login extends Component {

  state = {
    user : 'none',
    redirectHome : false
  }

  changeUser = (e) => {
    const user = e.target.value
    this.setState(() => ({ user }));
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.user))
    this.setState(() => ({ redirectHome : true }));
  }

  render() {

    if (this.state.redirectHome === true) {
      return <Redirect to='/' />
    }

    return <section>
        <div className="wrapper">
          <div className="box">
            <div className='box-header center'>
              <h3>Welcome to the Would You Rather App!</h3>
              <h5>Please sign in to continue</h5>
            </div>
            <div className='box-content center'>
              <h1>Sign in</h1>
              <form onSubmit={this.handleLogin}>
                <select onChange={this.changeUser} value={this.state.user}>
                  <option value='none' disabled defaultValue>Select User</option>
                  {this.props.users.map((user) => (
                    <option key={user} value={user}>{user}</option>      
                  ))}
                </select>
              <button disabled={this.state.user === 'none'}>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </section>;
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users),
  }
}


export default connect(mapStateToProps)(Login)
