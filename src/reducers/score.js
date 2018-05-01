import {UPDATE_SCORE} from '../actions/questions'

export default (state = 0, {type, payload}) => {
  switch (type) {
      case UPDATE_SCORE:
            return state + 1

      default:
        return state
    }
}
