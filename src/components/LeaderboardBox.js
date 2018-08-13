import React, { Component } from 'react'
import { connect } from "react-redux";

class LeaderboardBox extends Component {
  render() {

      if (this.props === null) {
          return <p>This question does not exist.</p>
      }

      const { name, avatar, id, answers, questions } = this.props

    return (
        <div className="box card">
            <div className="box-left">
                <img src={avatar} alt="" className="avatar" />
            </div>
            <div className="box-second">
                <h2>{name}</h2>
                <p>Answered questions <span className="alignright">{answers}</span></p>
                <hr />
                <p>Created questions <span className="alignright">{questions}</span></p>
            </div>
            <div className="box-third">
                <h3>Score</h3>
                <span className="score">{answers + questions}</span>
            </div>
        </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id]

    return { name: user.name, id: user.id, avatar: user.avatarURL, answers: Object.keys(user.answers).length, questions: user.questions.length };

}

export default connect(mapStateToProps)(LeaderboardBox)
