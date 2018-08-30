import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { handleAnswerQuestion } from '../actions/shared';
import PropTypes from 'prop-types';

class Question extends Component {
  state = {
    option: '',
    submit: true
  };

  handleSelection = option => {
    this.setState(() => ({
      option,
      submit: false
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submit: true });
    const { option } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAnswerQuestion(this.props.match.params.question_id, option));
    this.props.history.push(
      `/questions/${this.props.match.params.question_id}`
    );
  };

  getPercent = (numberVotes, totalVotes) => {
    let percent = 0;
    if (numberVotes > 0) {
      percent = Math.round((numberVotes / totalVotes) * 100);
    }
    return percent;
  };

  render() {
    const { authedUser, questions, users } = this.props;
    const question = questions[this.props.match.params.question_id];
    if (!question) {
      return <Redirect to="/404" />;
    }
    const totalVoteNum =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    const questionOneVotePercent = this.getPercent(
      question.optionOne.votes.length,
      totalVoteNum
    );
    const questionTwoVotePercent = this.getPercent(
      question.optionTwo.votes.length,
      totalVoteNum
    );

    if (
      question.optionOne.votes.indexOf(authedUser) !== -1 ||
      question.optionTwo.votes.indexOf(authedUser) !== -1
    ) {
      return (
        <div className="container content">
          <div className="row">
            <div className="box">
              <div className="box-header">
                <h4>{users[question.author].name} asks:</h4>
              </div>
              <div className="box-content">
                <div className="box-left">
                  <img
                    src={users[question.author].avatarURL}
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="box-right">
                  <h1>Results</h1>
                  <div className="box">
                    <div className="box-content">
                      <h3>{question.optionOne.text}</h3>
                      {question.optionOne.votes.indexOf(authedUser) !== -1 ? (
                        <span className="choice">Your choice</span>
                      ) : (
                        false
                      )}
                      <div className="progressbar-wapper">
                        <div
                          className="progressbar"
                          style={{ width: `${questionOneVotePercent}%` }}
                        >
                          <span className="progressbar-value">
                            {questionOneVotePercent} %
                          </span>
                        </div>
                      </div>
                      {question.optionOne.votes.length} out of {totalVoteNum}{' '}
                      {totalVoteNum > 1 ? 'votes' : 'vote'}
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-content">
                      <h3>{question.optionTwo.text}</h3>
                      {question.optionTwo.votes.indexOf(authedUser) !== -1 ? (
                        <span className="choice">Your choice</span>
                      ) : (
                        false
                      )}
                      <div className="progressbar-wapper">
                        <div
                          className="progressbar"
                          style={{ width: `${questionTwoVotePercent}%` }}
                        >
                          <span className="progressbar-value">
                            {questionTwoVotePercent} %
                          </span>
                        </div>
                      </div>
                      {question.optionTwo.votes.length} out of {totalVoteNum}{' '}
                      {totalVoteNum > 1 ? 'votes' : 'vote'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container content">
        <div className="row">
          <div className="card question">
            <div className="card-header">
              <h6 className="card-title">
                {users[question.author].name} asks:
              </h6>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s12 m4 l3">
                  <img
                    src={users[question.author].avatarURL}
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="col s12 m8 l9">
                  <h1>Would You Rather ...</h1>
                  <form onSubmit={this.handleSubmit}>
                    <p>
                      <label>
                        <input
                          name="options"
                          type="radio"
                          onChange={() => this.handleSelection('optionOne')}
                          checked={this.state.option === 'optionOne'}
                        />
                        <span>{question.optionOne.text}</span>
                      </label>
                    </p>

                    <p>
                      <label>
                        <input
                          name="options"
                          type="radio"
                          onChange={() => this.handleSelection('optionTwo')}
                          checked={this.state.option === 'optionTwo'}
                        />
                        <span>{question.optionTwo.text}</span>
                      </label>
                    </p>

                    <button
                      className="waves-effect waves-light btn"
                      disabled={this.state.submit}
                    >
                      SUBMIT YOUR ANSWER{' '}
                      <i className="material-icons right">arrow_right</i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  questions: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  authedUser: PropTypes.string.isRequired
};

function mapStateToProps({ questions, users, authedUser }) {
  return {
    authedUser,
    questions,
    users
  };
}

export default withRouter(connect(mapStateToProps)(Question));
