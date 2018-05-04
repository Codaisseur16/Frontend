//src/actions/QuizzDetails.js
import * as request from 'superagent'
const baseUrl = 'http://localhost:4001'
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

export const updateQuestion= card => ({
  type: UPDATE_QUESTION_CARD,
    payload: card
})

export const createQuestionCard = (question) => (dispatch, getState) => {
  const state = getState()
  // const jwt = state.currentUser.jwt
  // if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${baseUrl}/questions`)
    .send(question)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(addQuestion(question)))
    .catch(err => console.error(err))
}

export const UPDATE_QUESTION_CARD = 'UPDATE_QUESTION_CARD'
export const FETCH_SUBMITED_QUESTION = 'FETCH_SUBMITED_QUESTION'
export const DELETE_QUESTION_CARD = 'DELETE_QUESTION_CARD'


export const updateQuestion = card => ({
  type: UPDATE_QUESTION_CARD,
  payload: card
})

export const fetchSubmitedQuestion = question => ({
  type: FETCH_SUBMITED_QUESTION,
  payload: question 
})

export const deleteQuestion = card => ({
  type: DELETE_QUESTION_CARD,
  payload: card
})


export const updateQuestionCard = (card) => (dispatch) => {
  request
    .post(`${baseUrl}/questions`) ///${id}
    .send(card)
    .then(result => dispatch(updateQuestion(card)))
    .catch(err => console.error(err))
}

