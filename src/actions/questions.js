import {quizQuestions} from '../dummydata/questions'
import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const SEND_RESPONSE = 'SEND_RESPONSE'

export const getQuestions = (quizId) => (dispatch) => {
    request
      .get(`${baseUrl}/quizquestions/${quizId}`)
      .then(response => dispatch({
        type: GET_QUESTIONS,
        payload: response.body
      }))
      .catch(err => alert(err))
}

export const updateScore = () => ({
  type: UPDATE_SCORE
})


export const sendResponse = (response) => ({
    type: SEND_RESPONSE,
    payload: response
})
