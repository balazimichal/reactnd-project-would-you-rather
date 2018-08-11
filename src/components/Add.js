import React, { Component } from 'react'

export default class Add extends Component {
  render() {
    return <section>
        <div className="wrapper">
          <div className='box'>
            <div className='box-header'>
              <h3>Create New Question</h3>
              <h5>Complete the question:</h5>
            </div>
            <div className='box-content'>
              <h1>Would you rather...</h1>
              <form>
              <input type='text' placeholder='Enter option one text here' />
              <center>or</center>
              <input type='text' placeholder='Enter option two text here' />
              <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>;
  }
}
