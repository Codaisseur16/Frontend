//src/reducers/QuizzDetails.js
import {ADD_QUESTION_CARD, UPDATE_QUESTION_CARD} from '../actions/QuizzDetails'

export default (state = null, action) => {
    switch (action.type) {
        case ADD_QUESTION_CARD:
            return {
            ...state,
            [action.payload.id]: action.payload
        }
        // case UPDATE_QUESTION_CARD:
        //     if (action.payload.id === state.id) {
        //       return action.payload
        //     } else return state

        case UPDATE_QUESTION_CARD:
            if (action.payload === state) {
              return action.payload
            } else return state

        default: 
        return state
    }
}
