import React, { Component } from 'react'

export default class Leaderboard extends Component {
  render() {
    return <section>
        <div className="wrapper">
          <div className="box card">
            <div className="box-left">
              <img src="http://via.placeholder.com/150x150" alt="" className="avatar" />
            </div>
            <div className="box-second">
              <h2>Michal Balazi</h2>
              <p>Answered questions <span className="alignright">7</span></p>
                <hr />
              <p>Created questions <span className="alignright">7</span></p>
            </div>
            <div className="box-third">
                  <h3>Score</h3>
                  <span className="score">14</span>
            </div>
          </div>
        </div>
      </section>;
  }
}
