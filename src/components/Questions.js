import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDashbaord from './QuestionDashboard'

class Questions extends Component {
  render() {
      return <section>
          <div className="wrapper">
              {this.props.questionIds.map((id) => (
                  <div className="box" key={id}>
                      <QuestionDashbaord id={id} />
                  </div>
              ))}
          </div>
      </section>;
  }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
    }
}

export default connect(mapStateToProps)(Questions)