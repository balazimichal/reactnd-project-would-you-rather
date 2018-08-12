export const RECIEVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions,
    }
}