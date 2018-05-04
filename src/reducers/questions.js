import {FETCH_QUESTIONS} from '../actions/questions'
import {quizQuestions} from '../dummydata/questions'

const initialstate = quizQuestions.data

export default (state = initialstate, {type, payload}) => {
  switch (type) {
      case FETCH_QUESTIONS:
            return payload

      default:
        return state
    }
}
 
