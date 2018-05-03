import {ADD_QUIZ, GET_QUIZZES} from '../actions/quizzes'


export default (state = [], {type, payload}) => {
  switch (type) {
    case GET_QUIZZES:
    console.log("reducer" , payload)
      return payload
        
    case ADD_QUIZ:
      return {
        ...state,
        [payload.id]: payload
      } 
      default:
      return state
     }  
    }