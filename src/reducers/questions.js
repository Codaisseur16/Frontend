import {FETCH_QUESTIONS} from '../actions/questions'

export default (state = [], {type, payload}) => {
  switch (type) {
      case FETCH_QUESTIONS:
            return payload

      default:
        return state
    }
}
 
