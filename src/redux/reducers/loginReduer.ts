import {
  USER_LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../../utils/actionTypes'

interface User {
  user: string
  isLoading: boolean
  isAuthenticated: null
}

const initialState: User = {
  user: '',
  isLoading: true,
  isAuthenticated: null,
}
interface Action {
  type:string
  payload:any
}


const userInformation = (state: User = initialState, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        user: payload,
        isAuthenticated: true,
      }

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.errors,
        isAuthenticated: false,
        user: '',
      }
    default:
      return state
  }
}

export default userInformation
