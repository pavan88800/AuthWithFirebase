import {
  USER_REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../../utils/actionTypes'

interface User {
  user: null
  isLoading: boolean
  isAuthenticated: null
  error: string
}

const initialState: User = {
  user: null,
  isLoading: true,
  isAuthenticated: null,
  error: '',
}

interface Action {
  type:string
  payload:any
}

const authReducer = (state: User = initialState, action:  Action) => {
  const { type, payload } = action
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        user: payload,
        isAuthenticated: true,
      }

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        isAuthenticated: false,
      }

    default:
      return state
  }
}

export default authReducer
