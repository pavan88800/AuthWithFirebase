import React from "react";
import "./App.css";
import Signup from "./components/Signup";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="/" element={<Signup />} />
              <Route path="logIn" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
