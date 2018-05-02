//src/reducers/QuizzDetails.js
import {ADD_QUESTION_CARD, UPDATE_QUESTION_CARD_SUCCESS} from '../actions/QuizzDetails'

export default (state = null, {type, payload}) => {
    switch (type) {
        case ADD_QUESTION_CARD:
            return {
            ...state,
            [payload.id]: payload
        }
        case UPDATE_QUESTION_CARD_SUCCESS: 
            return {
                ...state,
                [payload.id]: payload
            }

        default: 
        return state
    }
}
