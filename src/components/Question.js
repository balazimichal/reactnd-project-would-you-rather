import React, { Component } from 'react'

export default class Question extends Component {
  render() {
    return <section>
      <div className="wrapper">
        <div className="box">
          <div className="box-header">
            <h4>Tyler Mc Ginis asks:</h4>
          </div>
          <div className="box-content">
            <div className="box-left">
              <img src="http://via.placeholder.com/150x150" alt="" className='avatar' />
            </div>
            <div className="box-right">
              <h1>Would You Rather ...</h1>
              <form>
                <div>
                  <input type="radio" name="gender" value="male" /> be a front end developer
                </div>
                <div>
                  <input type="radio" name="gender" value="female" /> be a backend developer
                </div>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}
