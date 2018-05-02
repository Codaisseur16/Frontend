import {SEND_RESPONSE} from '../actions/questions'

export default (state = {}, {type, payload}) => {
  switch (type) {
      case SEND_RESPONSE:
            return payload

      default:
        return state
    }
}
