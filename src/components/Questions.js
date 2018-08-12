import React, { Component } from 'react'
import { connect } from 'react-redux'

class Questions extends Component {
  render() {
      console.log(this.props)
      return <section>
          <div className="wrapper">
              {this.props.questionIds.map((id) => (
                  <div className="box" key={id}>
                      {id}
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


/*

*/