export const RECIEVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(users) {
    return {
        type: RECIEVE_USERS,
        users,
    }
}