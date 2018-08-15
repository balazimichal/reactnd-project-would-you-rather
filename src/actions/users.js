import { saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addUserQuestion(authedUser, questionID) {
    return {
        type: ADD_USER_QUESTION,
        authedUser,
        questionID,
    }
}










export function answerQuestion(data) {
    return {
        type: ANSWER_QUESTION,
        data
    };
}

export function handleAnswerQuestion(questionID, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestionAnswer({
            authedUser,
            questionID,
            option,
        })
            .then(answer => dispatch(answerQuestion(answer)))
          .then(() => dispatch(hideLoading()));
    }
}
