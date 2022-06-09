export function userRegister(data: any) {
  console.log(data,'data');
  return {
    type: "USER_REGISTER_REQUEST",
    payload: data
  };
}

export function userLogin(data: any) {
    console.log(data,'data');
    return {
      type: "USER_LOGIN_REQUEST",
      payload: data
    };
  }
  