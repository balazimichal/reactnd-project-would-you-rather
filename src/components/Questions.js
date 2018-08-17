import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionBox from './QuestionBox'

class Questions extends Component {

    state = {
        activeTab : 'unanswered',
    }

    handleTabChange = (tab) => {
        this.setState(() => ({
            activeTab: tab
        }))
    }

    render() {

    const { questions, authedUser } = this.props
    let orderedQuestions = ''
    orderedQuestions = Object.keys(questions)
        .map((question) => {
            return {
                ...questions[question],
                optionOneAnswered: questions[question].optionOne.votes.indexOf(authedUser) === -1 ? false : true,
                optionTwoAnswered: questions[question].optionTwo.votes.indexOf(authedUser) === -1 ? false : true, 
            }
        }).sort((a, b, ) => b.timestamp - a.timestamp)

        return <section>
            <div className="wrapper">
            <nav className='questions-navigation'>
                <span onClick={() => this.handleTabChange('unanswered')} className={`tab-nav ${this.state.activeTab === 'unanswered' ? 'active' : ''}`}>Unanswered Questions</span>
                <span onClick={() => this.handleTabChange('answered')} className={`tab-nav ${this.state.activeTab === 'answered' ? 'active' : ''}`}>Answered Questions</span>
            </nav>
                <div className={`unanswered tab ${this.state.activeTab === 'unanswered' ? 'active' : ''}`}>
                    {orderedQuestions.filter(question => question.optionOneAnswered !== true && question.optionTwoAnswered !== true).map(question => {

         
                        return <div className="box" key={question.id}>
                            <QuestionBox id={question.id} />
                        </div>
                    


              }
                
              )}
              </div>

                <div className={`answered tab ${this.state.activeTab === 'answered' ? 'active' : ''}`}>
                    {orderedQuestions.filter(question => question.optionOneAnswered === true && question.optionTwoAnswered === true).map(question => {

                        return <div className="box" key={question.id}>
                        <QuestionBox id={question.id} />
                    </div>

                }

                )}
                </div>
            </div>
          </section>;
    }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questions,
    authedUser
  };
}

export default connect(mapStateToProps)(Questions)