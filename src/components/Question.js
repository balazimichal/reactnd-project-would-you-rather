import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/users'

class Question extends Component {

  state = {
    option: '',
    submit: true,
  }

  handleSelection = (option) => {
    
    this.setState(() => ({
      option,
      submit: false,
    }))
    
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { option } = this.state
    const { dispatch } = this.props

    console.log('question id: ', this.props.match.params.question_id);
    console.log('option: ', option)

    dispatch(handleAnswerQuestion(this.props.match.params.question_id, option));
  }

  render() {
    const { authedUser, questions, users} = this.props
    const question = questions[this.props.match.params.question_id]
    const questionOne = question.optionOne.text
    const questionTwo = question.optionTwo.text
    const user = users[question.author]
    const userName = user.name
    const userAvatar = user.avatarURL

    return <section>
        <div className="wrapper">
          <div className="box">
            <div className="box-header">
              <h4>{userName} asks:</h4>
            </div>
            <div className="box-content">
              <div className="box-left">
                <img src={userAvatar} alt="" className="avatar" />
              </div>
              <div className="box-right">
                <h1>Would You Rather ...</h1>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <input type="radio" name="options" onChange={() => this.handleSelection('optionOne')} checked={this.state.option === "optionOne"} /> {questionOne}
                  </label>
                  <label>
                  <input type="radio" name="options" onChange={() => this.handleSelection('optionTwo')} checked={this.state.option === "optionTwo"} /> {questionTwo}
                  </label>
                  <button disabled={this.state.submit}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>;
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(Question);