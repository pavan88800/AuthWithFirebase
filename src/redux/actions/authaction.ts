import {
  USER_LOGIN_REQUEST,
  USER_REGISTER_REQUEST,
} from '../../utils/actionTypes'

type FormData = {
  email: string
  password: string
}

export function userRegister(data: FormData) {
  return {
    type: USER_REGISTER_REQUEST,
    payload: data,
  }
}

export function userLogin(data: FormData) {
  return {
    type: USER_LOGIN_REQUEST,
    payload: data,
  }
}
