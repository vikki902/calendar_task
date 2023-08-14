import React from "react";
import { Route, Routes, Link} from "react-router-dom"
import MyCalendar from "./Calendar";
import "../style/global.scss"
import AddEvents from "./AddEvents";
import UpdateEvent from "./UpdateEvent";
import User from "./User";
import Login from "./Login";
import Register from "./Register";

function App() {


  return (
    <>
  
    <Routes>
      <Route  path="/" exact element={<Login/>} />
      <Route  path="/register" exact element={<Register/>} />
      <Route  path="/calender" exact element={<MyCalendar/>} />
      <Route path="/events/add" element={<AddEvents/>}/>
      <Route path="/event/:id/update" element={<UpdateEvent/>}/>
      <Route  path="/student" exact element={<User/>} />
     

    </Routes>
    </>
  );
}



export default (App)