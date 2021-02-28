import React from "react";
import Login from "../components/Login";

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
    <div className="container">{
      isLoggedIn ? <h1>Hello</h1> : <Login />
    }</div>
  );
}

export default App;
