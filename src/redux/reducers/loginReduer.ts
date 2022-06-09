interface User {
  user: string;
  isLoading: boolean;
  isAuthenticated: null;
}

const initialState: User = {
  user: "",
  isLoading: true,
  isAuthenticated: null
};

const userInformation = (state: User = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        ...payload,
        loading: false,
        user: payload,
        isAuthenticated: true
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        loading: false,
        error: payload.errors,
        isAuthenticated:false,
        user:''
      };

    default:
      return state;
  }
};

export default userInformation;
