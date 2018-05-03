import {ADD_QUIZ} from '../actions/quizzes'


export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case ADD_QUIZ:
      return {
        ...state,
        [payload.id]: payload
      } 
      default:
      return state
     }  
    }