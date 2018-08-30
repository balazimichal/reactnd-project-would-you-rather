import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';
import { withRouter } from 'react-router-dom';

class Add extends Component {
  state = {
    questionOne: '',
    questionTwo: ''
  };

  handleQuestionOne = e => {
    const questionOne = e.target.value;
    this.setState(() => ({
      questionOne
    }));
  };

  handleQuestionTwo = e => {
    const questionTwo = e.target.value;
    this.setState(() => ({
      questionTwo
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { questionOne, questionTwo } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(questionOne, questionTwo));

    this.setState(() => ({
      questionOne: '',
      questionTwo: ''
    }));

    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container content">
        <div className="row">
          <h1 className="center-align">Create New Question</h1>
        </div>

        <div className="row">
          <div className="col s12 m8 l6 offset-m2 offset-l3">
            <div className="card">
              <div className="card-content">
                <div className="box-header">
                  <h6>Complete the question:</h6>
                </div>
                <div className="box-content">
                  <h1>Would you rather...</h1>
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      placeholder="Enter option one text here"
                      value={this.state.questionOne}
                      onChange={this.handleQuestionOne}
                    />
                    <center>or</center>
                    <input
                      type="text"
                      placeholder="Enter option two text here"
                      value={this.state.questionTwo}
                      onChange={this.handleQuestionTwo}
                    />
                    <button
                      className="waves-effect waves-light btn-large"
                      disabled={
                        this.state.questionOne === '' ||
                        this.state.questionTwo === ''
                      }
                    >
                      SUBMIT QUESTIONS
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

export default withRouter(connect()(Add));
