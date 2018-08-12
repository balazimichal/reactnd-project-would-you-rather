import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class Login extends Component {
  
  componentDidMount() {
    console.log('test')
    this.props.dispatch(handleInitialData())
  }

  render() {
    return <section>
        <div className="wrapper">
          <div className="box">
            <div className='box-header center'>
              <h3>Welcome to the Would You Rather App!</h3>
              <h5>Please sign in to continue</h5>
            </div>
            <div className='box-content center'>
              <h1>Sign in</h1>
              <form>
                <select onChange={(event) => this.props.changeUser(event.target.value)} value={'none'}>
                  <option value="" disabled defaultValue>Select User</option>
                </select>
                <button>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </section>;
  }
}

export default connect()(Login)
