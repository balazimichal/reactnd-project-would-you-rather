import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardBox from './LeaderboardBox'

class Leaderboard extends Component {
  render() {




    return <section>
        <div className="wrapper">
        {this.props.userIds.map((id) => (
          <div key={id}>
            <LeaderboardBox id={id} />
          </div>
        ))}




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


/*
POSSIBLE SOLUTION NO2

let orderedUsers = Object.keys(this.props.users)
  .map(user => {
    return {
      ...this.props.users[user],
      score: Object.keys(this.props.users[user].answers).length + this.props.users[user].questions.length,
      answer: Object.keys(this.props.users[user].answers).length,
      question: this.props.users[user].questions.length
    };
  })
  .sort(function (a, b) {
    if (a.score > b.score) {
      return -1;
    } else if (a.score < b.score) {
      return 1;
    }
    return 0;
  });


{
  orderedUsers.map(user => (
    <div>
      {user.id}
      {user.name}
      {user.answer}
      {user.question}
      {user.score}
      {user.avatarURL}
    </div>
  ))
}
*/