import React, { FC, useState  } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/authaction";
import {  Link } from "react-router-dom";
import { Navigate, } from "react-router-dom";
const Login: FC = () => {
  const dispatch = useDispatch();
  const [input, setInput]: any = useState({
    email: "",
    password: ""
  });

  let user = useSelector((state:any )=> state.LoginUser)
   let  { isAuthenticated } = user
  if (isAuthenticated) {
    return  <Navigate to="/home" replace={true} />
  }
 
  const change = (e: any) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const { email, password } = input;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please enter all values");
    } else {
      console.log({ email, password });
      dispatch(userLogin({ email, password }));
    }
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        marginTop: 150
      }}
    >
      <CssBaseline />
      <div>
        <Typography
          component="h6"
          variant="h4"
          style={{ textAlign: "center", marginBottom: 20 }}
        >
          Login
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={change}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={change}
                value={password}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
           onClick={(e: any) => handleSubmit(e)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
          >
            LogIn
          </Button>
          <>
          <p>Don't have an account? <Link to='/'>Register</Link></p>
          </>
        </form>
      </div>
    </Container>
  );
};

export default Login;
