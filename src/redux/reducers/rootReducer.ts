import { combineReducers } from "redux";
import userInformation from "./loginReduer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  Auth: authReducer,
  LoginUser: userInformation
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
