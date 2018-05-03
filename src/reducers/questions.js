import {FETCH_QUESTIONS} from '../actions/questions'
import { DELETE_QUESTION_CARD} from '../actions/QuizzDetails'

export default (state = [], action) => {
  switch (action.type) {
        case FETCH_QUESTIONS:
            return action.payload

        case DELETE_QUESTION_CARD:
        console.log('applied')
            return state.filter(question => question.id === action.payload)
              

      default:
        return state
    }
}
 
