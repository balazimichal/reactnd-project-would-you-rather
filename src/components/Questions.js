import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionBox from './QuestionBox';
import PropTypes from 'prop-types';

class Questions extends Component {
  state = {
    activeTab: 'unanswered'
  };

  handleTabChange = tab => {
    this.setState(() => ({
      activeTab: tab
    }));
  };

  render() {
    const { orderedQuestions } = this.props;

    return (
      <div className="container content">
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s6">
                <a
                  href="#!"
                  onClick={() => this.handleTabChange('unanswered')}
                  className={`${
                    this.state.activeTab === 'unanswered' ? 'active' : ''
                  }`}
                >
                  Unanswered Questions
                </a>
              </li>
              <li className="tab col s6">
                <a
                  onClick={() => this.handleTabChange('answered')}
                  className={`tab-nav ${
                    this.state.activeTab === 'answered' ? 'active' : ''
                  }`}
                  href="#!"
                >
                  Answered Questions
                </a>
              </li>
            </ul>

            <div
              className={`unanswered tab ${
                this.state.activeTab === 'unanswered' ? 'active' : ''
              }`}
            >
              {orderedQuestions
                .filter(
                  question =>
                    question.optionOneAnswered !== true &&
                    question.optionTwoAnswered !== true
                )
                .map(question => {
                  return (
                    <div className="box" key={question.id}>
                      <QuestionBox id={question.id} />
                    </div>
                  );
                })}
            </div>

            <div
              className={`answered tab ${
                this.state.activeTab === 'answered' ? 'active' : ''
              }`}
            >
              {orderedQuestions
                .filter(
                  question =>
                    question.optionOneAnswered === true ||
                    question.optionTwoAnswered === true
                )
                .map(question => {
                  return (
                    <div className="box" key={question.id}>
                      <QuestionBox id={question.id} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Questions.propTypes = {
  orderedQuestions: PropTypes.array.isRequired
};

function mapStateToProps({ questions, authedUser }) {
  return {
    orderedQuestions: Object.keys(questions)
      .map(question => {
        return {
          ...questions[question],
          optionOneAnswered:
            questions[question].optionOne.votes.indexOf(authedUser) === -1
              ? false
              : true,
          optionTwoAnswered:
            questions[question].optionTwo.votes.indexOf(authedUser) === -1
              ? false
              : true
        };
      })
      .sort((a, b) => b.timestamp - a.timestamp)
  };
}

export default connect(mapStateToProps)(Questions);
