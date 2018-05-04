//src/actions/QuizzDetails.js
import * as request from 'superagent'
const baseUrl = 'http://localhost:4001'
// import {logout} from './users'
// import {isExpired} from '../jwt'
export const CREATE_QUESTION_CARD = 'CREATE_QUESTION_CARD'
export const GET_SUBMITED_QUESTION = 'GET_SUBMITED_QUESTION'
export const DELETE_QUESTION_CARD = 'DELETE_QUESTION_CARD'


export const createQuestion = card => ({
  type: CREATE_QUESTION_CARD,
  payload: card
})

export const getSubmitedQuestion = question => ({
  type: GET_SUBMITED_QUESTION,
  payload: question 
})

export const deleteQuestion = card => ({
  type: DELETE_QUESTION_CARD,
  payload: card
})

export const createQuestionCard = (card) => (dispatch) => {
  console.log(card)
  request
    .post(`${baseUrl}/questions`)
    .send(card)
    .then(result => dispatch(createQuestion(card)))
    .catch(err => console.error(err))
}

export const deleteQuestionCard = (questionId) => (dispatch) => {
  request
    .delete(`${baseUrl}/questions/${questionId}`) 
    .then(result => dispatch(deleteQuestion(questionId)))
    .catch(err => console.error(err))
}
