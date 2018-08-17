import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardBox from './LeaderboardBox'

class Leaderboard extends Component {
  render() {
    const { users } = this.props



    return <section>
        <div className="wrapper">
        {Object.keys(users)
          .map((user) => {
            return {
              ...users[user],
              score: Object.keys(users[user].answers).length + users[user].questions.length,
            }
          }).sort((a, b, ) => b.score - a.score).map((user) => (
          <div key={user.id}>
            <LeaderboardBox id={user.id} />
          </div>
        ))}
        </div>
      </section>;
  }
}

function mapStateToProps({ users }) {
  return {  
    users
  }
}

export default connect(mapStateToProps)(Leaderboard);