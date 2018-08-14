import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardBox from './LeaderboardBox'

class Leaderboard extends Component {
  render() {


    let sortedUser = Object.keys(this.props.users)
      .map(username => {
        return { ...this.props.users[username], 
        score: Object.keys(this.props.users[username].answers).length + this.props.users[username].questions.length, 
        A: Object.keys(this.props.users[username].answers).length, 
        Q: this.props.users[username].questions.length };
      })
      .sort(function(a, b) {
        if (a.score > b.score) {
          return -1;
        } else if (a.score < b.score) {
          return 1;
        }
        return 0;
      });

    return <section>
        <div className="wrapper">
        {this.props.userIds.map((id) => (
          <div key={id}>
            <LeaderboardBox id={id} />
          </div>
        ))}


        {
          sortedUser.map(obj => (
            <div>
              {obj.id}
              {obj.name}
              {obj.A}
              {obj.Q}
              {obj.score}
              {obj.avatarURL}
            
            </div>
          ))
        }

        </div>
      </section>;
  }
}

function mapStateToProps({ users }) {
  return {  
    userIds: Object.keys(users),
    users,
  }
}

export default connect(mapStateToProps)(Leaderboard);






