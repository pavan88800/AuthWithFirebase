import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  let{ user} = useSelector((state: any) => state.LoginUser);
  
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Welcome to {user?.email}</h3>
    </div>
  );
};

export default Home;
