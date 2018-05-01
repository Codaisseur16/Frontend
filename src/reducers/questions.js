import {FETCH_QUESTIONS} from '../actions/questions'


export default (state = null, {type, payload}) => {
  switch (type) {
      case FETCH_QUESTIONS:
            console.log(payload)
            return payload

      default:
        return state
    }
}
