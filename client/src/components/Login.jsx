import React from 'react'
import { Link } from "react-router-dom";
import "./login.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username , setUsername] = useState();
  const [password , setPassword ] = useState();

  const logoutHandel= () =>{}

  const handleSubmit = (e) => {
    e.preventDefault();
   axios.post("http://localhost:8080/api/user/login-user",{username,password})
   .then((res)=>{

      if(res.data == null){
        alert("No user found")
      }
      else{
        console.log(res.data)
        if(res.data.usertype=== "student")
        {
          navigate("/student")
        }
        else if(res.data.usertype=== "teacher")
        {
          navigate("/calender")
        }
        
      }
   })
   .catch(err =>console.log(err))

  }

  const renderForm = (
    <div className="form">

      <form onSubmit={handleSubmit}>
        <div className="input-container">

          <label>Username </label>
          <input type="text" name="uname"  className='inpt' required
            value={username} onChange={(e)=>setUsername(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" className='inpt' required 
          value={password} onChange={(e)=>setPassword(e.target.value)}
          />
      
        </div>

        <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
        <div className="button-container">
          <input type="submit"  className='inpt-submit'/>
        </div>

      </form>

    </div>
  );

    

  return (

    <>

<nav className="navbar navbar-light bg-light">
     
     <div className="container-fluid align-items-center">
       <Link className="navbar-brand ms-2" to="/">
         <h3>Agenda</h3>
       </Link>
      
     </div>

   </nav>
   
       <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted == 1 ? <div>User is successfully logged in <button onClick={logoutHandel}>logout</button></div> : renderForm}
      </div>
    </div>
      </div>
    </>
  )
}

export default Login
