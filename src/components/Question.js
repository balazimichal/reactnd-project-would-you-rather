import React, { Component } from 'react'
import { connect } from 'react-redux';

class Question extends Component {
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
                <form>
                  <div>
                    <input type="radio" name="option" value="" /> {questionOne}
                  </div>
                  <div>
                    <input type="radio" name="options" value="" /> {questionTwo}
                  </div>
                  <button>Submit</button>
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