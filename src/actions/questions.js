import {quizQuestions} from '../dummydata/questions'
import * as request from 'superagent'

const baseUrl = 'http://localhost:4002'

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const SEND_RESPONSE = 'SEND_RESPONSE'
export const GET_RESPONSE='GET_RESPONSE'


// export const fetchQuestions = (quizId) => (dispatch) => {
//     request
//       .get(`${baseUrl}/questions/${quizId}`)
//       .then(response => dispatch({
//         type: FETCH_QUESTIONS,
//         payload: response.body.data
//       }))
//       .catch(err => alert(err))
// }

export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
  payload: quizQuestions.data
})

export const updateScore = () => ({
  type: UPDATE_SCORE
})

// export const sendResponse = (response) => (dispatch) => {
//     request
//     .post(`${baseUrl}/responses`)
//     .send(response)
// }

//export const sendResponse = (response) => ({
   // type: SEND_RESPONSE,
   // payload: response
//})

 export const sendResponse = (response) => (dispatch) => {
   console.log("inside action sendresponse")
   console.log(response)
     request
       .post(`${baseUrl}/responses`)
       .send(response)
       .then(response => dispatch({
         type: SEND_RESPONSE,
         payload: response
      }))
      .catch(err => alert(err))
}


export const getResponse=(user_id)=>(dispatch)=>{
  
  request
    .get(`${baseUrl}/responses/user/${user_id}`)
    .then(response => {
      console.log('getallresponse', response)
      //user_id = response.body.user_id
      dispatch({
      type: GET_RESPONSE,
      payload: response.text
    })
    
  }
  )
    .catch(err => alert(err))
}





