import React from "react";
import Login from "../components/Login";
import Time from "./Time";

var isLoggedIn = false;

// function renderConditionally(){
//   if(isLoggedIn === true){
//     return <Login />
//   }else {
//     return <h1>Hello</h1>
//   }
// }

function App() {
  return (
    <div className="container">
      <Login userLoggedIn={isLoggedIn}/>
      <Time />
    </div>
  );
}

export default App;
