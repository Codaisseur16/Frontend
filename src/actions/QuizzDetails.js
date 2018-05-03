//src/actions/QuizzDetails.js
import * as request from 'superagent'
const baseUrl = 'http://localhost:4001'
// import {logout} from './users'
// import {isExpired} from '../jwt'
export const UPDATE_QUESTION_CARD = 'UPDATE_QUESTION_CARD'
export const DELETE_GAME = 'DELETE_CARD'


export const updateQuestion= card => ({
  type: UPDATE_QUESTION_CARD,
    payload: card
})

export const updateQuestionCard = (card) => (dispatch) => {
  request
    .post(`${baseUrl}/questions`) ///${id}
    .send(card)
    .then(result => dispatch(updateQuestion(card)))
    .catch(err => console.error(err))
}