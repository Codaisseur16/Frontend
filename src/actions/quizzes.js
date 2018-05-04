import * as request from 'superagent'
import {logout} from './users'
import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4001'

export const ADD_QUIZ = 'ADD_QUIZ'
export const GET_QUIZZES = 'GET_QUIZZES'
export const FETCHED_DETAILED_QUIZ = 'FETCHED_DETAILED_QUIZ'

const addQuiz = quiz => ({
    type: ADD_QUIZ,
    payload: quiz
  })

  export const createQuiz = (quiz) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

      if (isExpired(jwt)) return dispatch(logout())
   console.log(quiz)
    request
      .post(`${baseUrl}/quizzes`)
      .send(quiz) 
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(addQuiz(quiz)))
      .catch(err => console.error(err))
  }  

  export const getQuizzes = () => (dispatch, getState) => {
   const state = getState()
   const jwt = state.currentUser.jwt
  
    request
      .get(`${baseUrl}/quizzes`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch({
          type: GET_QUIZZES,
          payload: result.body
        }))
      .catch(err => console.error(err))
  }

