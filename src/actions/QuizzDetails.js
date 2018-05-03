//src/actions/QuizzDetails.js
import * as request from 'superagent'
const baseUrl = 'http://localhost:4000'
// import {logout} from './users'
// import {isExpired} from '../jwt'
export const GET_GAME = 'GET_GAME'
export const ADD_QUESTION_CARD = 'ADD_QUESTION_CARD'
export const UPDATE_QUESTION_CARD = 'UPDATE_QUESTION_CARD'
export const DELETE_GAME = 'DELETE_CARD'


export const addQuestion = question => ({
    type: ADD_QUESTION_CARD,
    payload: question
})

// export const updateQuestionCard = question => ({
//   type: UPDATE_QUESTION_CARD,
//     payload: question
// })

export const createQuestionCard = () => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt

  // if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${baseUrl}/quizzquestion`)// /${id} of quizz
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(addQuestion(result.body)))
    .catch(err => console.error(err))
}

export const updateQuestionCard = (questionId, card) => (dispatch) => {
  request
    .patch(`${baseUrl}/question`) ///${id}
    .send(card)
    .then(response =>dispatch({
      type: UPDATE_QUESTION_CARD,
      payload: response.body
    }))
    .catch(err => console.error(err))
}

// export const updateQuestionCard = (questionId, card) => (dispatch, getState) => {
//   const state = getState()
//   const jwt = state.currentUser.jwt

//   if (isExpired(jwt)) return dispatch(logout())

//   request
//     .patch(`${baseUrl}/question/${Id}`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .send({ card })
//     .then(_ => dispatch(updateQuestionCard()))
//     .catch(err => console.error(err))
// }

// patch (update board)
//delete - send id of question  