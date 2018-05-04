import {USER_LOGIN_SUCCESS, USER_LOGOUT} from '../actions/users'
const initialState = {userId: 3, teacher: true}

export default function (state = initialState, {type, payload}) {
	switch (type) {
		case USER_LOGIN_SUCCESS:
			return payload

    case USER_LOGOUT:
      return null

		default:
      return state
	}
}
