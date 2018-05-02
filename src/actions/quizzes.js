import * as request from 'superagent'
//import {logout} from './users'
//import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4000'

export const ADD_QUIZ = 'ADD_QUIZ'

const addQuiz = quiz => ({
    type: ADD_QUIZ,
    payload: quiz
  })

  export const createQuiz = () => (dispatch, getState) => {
    //const state = getState()
    //const jwt = state.currentUser.jwt
  
    //if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/quizzes`)
      //.set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(addQuiz(result.body)))
      .catch(err => console.error(err))
  }  