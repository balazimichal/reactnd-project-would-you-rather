import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'

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
    const questionOneVote = question.optionOne.votes
    const questionTwoVote = question.optionTwo.votes
    const questionOneVoteNum = question.optionOne.votes.length
    const questionTwoVoteNum = question.optionTwo.votes.length
    let questionOneVotePercent = 0
    let questionTwoVotePercent = 0

    const totalVoteNum = question.optionOne.votes.length + question.optionTwo.votes.length;
    if (questionOneVoteNum > 0) {
      questionOneVotePercent = Math.round((totalVoteNum / questionOneVoteNum) * 100)
    } 
    if (questionTwoVoteNum > 0) {
      questionTwoVotePercent = Math.round((totalVoteNum / questionTwoVoteNum) * 100)
    }
    



    
    if (questionOneVote.indexOf(authedUser) !== -1 || questionTwoVote.indexOf(authedUser) !== -1) {
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
                  <h1>Results</h1>
                  <div className="box">
                    <div className="box-content">
                      <h3>{questionOne}</h3>
                    {questionOneVote.indexOf(authedUser) !== -1
                      ? <span className='choice'>Your choice</span>
                      : false
                    }
                      <div className='progressbar-wapper'>
                      <div className='progressbar' style={{ width: `${questionOneVotePercent}%`}}>
                          <span className='progressbar-value'>{questionOneVotePercent} %</span>
                        </div>
                      </div>
                      {questionOneVoteNum} out of {totalVoteNum} {totalVoteNum > 1 ? "votes" : "vote"}
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-content">
                      <h3>{questionTwo}</h3>
                      {questionTwoVote.indexOf(authedUser) !== -1 
                        ? <span className='choice'>Your choice</span>
                        : false
                      }
                      <div className='progressbar-wapper'>
                      <div className='progressbar' style={{ width: `${questionTwoVotePercent}%` }}>
                          <span className='progressbar-value'>{questionTwoVotePercent} %</span>
                        </div>
                      </div>
                      {questionTwoVoteNum} out of {totalVoteNum} {totalVoteNum > 1 ? "votes" : "vote"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>;
    }
    

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