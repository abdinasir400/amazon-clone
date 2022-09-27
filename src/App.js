import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import "./App.css";
import React, { useEffect } from "react";
// import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LO9DbKTQrdCpZdTorT8RXv1xLBsFByHlAHsfpdn7kJ07CKKxrOTkV8B9gzpMe2ygbB7gr17LAUqoGvIHrRvy1hK00R90wGdRQ"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe = {promise}>
                 <Payment /> 
                </Elements>
                
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
