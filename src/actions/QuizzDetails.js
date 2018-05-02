//src/actions/QuizzDetails.js
import * as request from 'superagent'
const baseUrl = 'http://localhost:4000'
// import {logout} from './users'
// import {isExpired} from '../jwt'
export const ADD_QUESTION_AND_A = 'ADD_QUESTION'

export const addQuestion = question => ({
    type: ADD_QUESTION_AND_A,
    payload: question
})

export const createQuestionCard = () => (dispatch, getState) => {
  const state = getState()
  // const jwt = state.currentUser.jwt

  // if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${baseUrl}/quizquestion/${id}`)//id of quizz
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(addQuestion(result.body)))
    .catch(err => console.error(err))
}

// patch (update board)
//delete - send id of question  