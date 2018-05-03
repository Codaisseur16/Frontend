//src/reducers/QuizzDetails.js
import { UPDATE_QUESTION_CARD, DELETE_QUESTION_CARD} from '../actions/QuizzDetails'

export default (state = [], action) => {
    switch (action.type) {
        case UPDATE_QUESTION_CARD:
            if (action.payload.id === state.id) {
              return action.payload
            } else return state
        
        case DELETE_QUESTION_CARD:
        if (action.payload.id === state.id) {
            return state.filter(question => question.id !== action.payload)
          } else return state
  	     

        default: 
        return state
    }
}
