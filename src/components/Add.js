import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class Add extends Component {
  state = {
    questionOne : '',
    questionTwo : ''
  }

  handleQuestionOne = (e) => {
    const questionOne = e.target.value
    this.setState(() => ({
      questionOne
    }))
  }

  handleQuestionTwo = (e) => {
    const questionTwo = e.target.value
    this.setState(() => ({
      questionTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { questionOne, questionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(questionOne, questionTwo));
    console.log(questionOne, questionTwo)
    
    this.setState(() => ({
      questionOne : '',
      questionTwo : ''
    }))

    // TODO: redicrect user to home
  }

  render() {
    return <section>
        <div className="wrapper">
          <div className='box'>
            <div className='box-header'>
              <h3>Create New Question</h3>
              <h5>Complete the question:</h5>
            </div>
            <div className='box-content'>
              <h1>Would you rather...</h1>
              <form onSubmit={this.handleSubmit}>
              <input type='text' placeholder='Enter option one text here' value={this.state.questionOne} onChange={this.handleQuestionOne} />
              <center>or</center>
              <input type='text' placeholder='Enter option two text here' value={this.state.questionTwo} onChange={this.handleQuestionTwo} />
              <button disabled={this.state.questionOne === '' || this.state.questionTwo === ''}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>;
  }
}

export default connect()(Add)