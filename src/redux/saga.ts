import firebase from "../firebase";
import "firebase/compat/auth";
import { takeLatest, put, call } from "redux-saga/effects";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  user?: any;
}

type FormData = {
    email: string;
    password: string;
  };

  // Register 
export const RegisterAPI = async (data: FormData) => {
  const auth = firebase.auth();
  let response = await auth.createUserWithEmailAndPassword(data.email, data.password);
  return response;
};
function* signUp(action: any) {
  try {
    const result: ResponseGenerator = yield call(RegisterAPI, action.payload);
    yield put({ type: "REGISTER_SUCCESS", payload: result });
  } catch (error: any) {
    console.log(error.message);
    const error_message = { code: error.code, message: error.message };
    yield put({ type: "REGISTER_FAIL", payload: error.message });
  }
}

// Login User
export const LoginAPI = async (data: FormData) => {
    const auth = firebase.auth();
    let response = await auth.signInWithEmailAndPassword(data.email, data.password);
    return response;
  };

function* login(action: any) {
    try {
      const result: ResponseGenerator = yield call(LoginAPI, action.payload);
      yield put({ type: "LOGIN_SUCCESS", payload: result?.user?._delegate });
      // console.log(result?.user?._delegate, 're')
    } catch (error: any) {
      console.log(error);
      // const error_message = { code: error.code, message: error.message };
      yield put({ type: "REGISTER_FAIL", error: error.message });
    }
  }

export function* watchAgeUp() {
  yield takeLatest("USER_REGISTER_REQUEST", signUp);
  yield takeLatest("USER_LOGIN_REQUEST", login);
}

