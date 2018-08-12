import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = "tylermcginnis"

export function handleInitialData () {
    return ( dispatch ) => {
        return getInitialData()
        .then(({ users, questions}) => {
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}