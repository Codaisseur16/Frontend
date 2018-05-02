//src/reducers/QuizzDetails.js
import {ADD_QUESTION_AND_A} from '../actions/QuizzDetails'

export default (state = null, {type, payload}) => {
    switch (type) {
      case ADD_QUESTION_AND_A:
        return {
          ...state,
          [payload.id]: payload
        }
        default: 
        return state
    }
}