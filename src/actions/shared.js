import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, addUserQuestion, answerQuestion } from './users'
import { receiveQuestions, addQuestion, addQuestionAnswer } from "./questions";
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = null

export function handleInitialData () {
    return ( dispatch ) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({ users, questions}) => {
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => {
                dispatch(addQuestion(question))
                dispatch(addUserQuestion(authedUser, question.id))
                dispatch(hideLoading())
            })
    }
}


export function handleAnswerQuestion(questionID, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        console.log(authedUser, questionID, option)

        
        return saveQuestionAnswer({
            authedUser,
            qid: questionID,
            answer: option,
        })
        
            .then(() => {
                dispatch(answerQuestion(authedUser, questionID, option))
                dispatch(addQuestionAnswer(authedUser, questionID, option));
                dispatch(hideLoading())
            })
        
    }
}