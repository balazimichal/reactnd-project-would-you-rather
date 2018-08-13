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
    userIds: Object.keys(users)
  }
}





export default connect(mapStateToProps)(Leaderboard)