import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

const QuestionBox = (props) => {

    const viewPoll = (id) => {
        props.history.push(`questions/${id}`)
    }


    if (props === null) {
        return <p>This question does not exist.</p>
    }

    const { name, avatar, text, id } = props

    return <div>
        <div className="box-header">
            <h4>{name} asks:</h4>
        </div>
        <div className="box-content">
            <div className="box-left">
                <img src={avatar} alt={name} className="avatar" />
            </div>
            <div className="box-right">
                <h4>Would you rather...</h4>
                <p>
                    ...
              {text}
                    ...
            </p>
                <button onClick={(e) => viewPoll(id)}>View poll</button>
            </div>
        </div>
    </div>;
}








function mapStateToProps({ questions, users }, {id}) {
    const question = questions[id]
        
    return { 
                name: users[question.author].name, 
                text: question.optionOne.text, 
                avatar: users[question.author].avatarURL,
                id: question.id
            }

        }
export default withRouter(connect(mapStateToProps)(QuestionBox))
