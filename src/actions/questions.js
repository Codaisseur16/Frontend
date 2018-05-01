import {quizQuestions} from '../dummydata/questions'
// import * as request from 'superagent'
//
// const baseUrl = 'http://localhost:4001'

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'

// export const fetchQuestions = (quizId) => (dispatch) => {
//     request
//       .get(`${baseUrl}/quiz/${quizId}`)
//       .then(response => dispatch({
//         type: FETCH_QUESTIONS,
//         payload: response.body
//       }))
//       .catch(err => alert(err))
// }

export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
  payload: quizQuestions.data
})
