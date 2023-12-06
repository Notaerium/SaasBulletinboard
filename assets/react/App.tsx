import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Board from "./components/Board";
import AddPost from "./components/AddUpdatePost";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create_post" element={<AddPost/>}/>
        <Route path="/" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
