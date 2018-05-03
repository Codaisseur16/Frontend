//src/actions/QuizzDetails.js
import * as request from 'superagent'
const baseUrl = 'http://localhost:4001'
// import {logout} from './users'
// import {isExpired} from '../jwt'
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

export const updateQuestionCard = (card, quizId) => (dispatch) => {
card['quizId'] = quizId
  request
    .post(`${baseUrl}/questions`) ///${id}
    .send(card, quizId)
    .then(result => dispatch(updateQuestion(card)))
    .catch(err => console.error(err))
}

export const deleteQuestionCard = (questionId) => (dispatch) => {
  request
    .delete(`${baseUrl}/question`) //get the delete endpoint 
    .then(response => dispatch({
      type: DELETE_QUESTION_CARD,
      payload: questionId
    }))
}
