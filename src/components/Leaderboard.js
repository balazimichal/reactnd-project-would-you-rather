import React from 'react';
import { connect } from 'react-redux';
import LeaderboardBox from './LeaderboardBox';
import PropTypes from 'prop-types';

const Leaderboard = ({ users }) => (
  <div className="container content">
    <div className="row">
      {Object.keys(users)
        .map(user => {
          return {
            ...users[user],
            score:
              Object.keys(users[user].answers).length +
              users[user].questions.length
          };
        })
        .sort((a, b) => b.score - a.score)
        .map(user => (
          <div key={user.id}>
            <LeaderboardBox id={user.id} />
          </div>
        ))}
    </div>
  </div>
);

Leaderboard.propTypes = {
  users: PropTypes.object.isRequired
};

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);
