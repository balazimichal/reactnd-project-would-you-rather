import { getInitialData, saveQuestion } from "../utils/api";
import { receiveUsers, addUserQuestion } from './users'
import { receiveQuestions, addQuestion } from "./questions";
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from '../../node_modules/react-redux-loading';

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