import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './register.css'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate();
    const [username , setUsername] = useState()
    const [password , setpassword] = useState()
    const [usertype , setUerstype] = useState()

    const handelSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://calendar-task.onrender.com/api/user",{username,password,usertype})
        .then((res)=>{
            console.log(res)
        })
        alert("Registration sucessfull")
        navigate("/")
    
        
    }

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

                <h1 className="text-center">Register</h1>
                <hr />
                
                <div className='outline'>
                <div class="row my-4 h-100 ">
               
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                   
                        <form onSubmit={handelSubmit} className='login-form'>
                            <div class="form my-3">
                                <label for="Name">Username</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Your Name"
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Usertype</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter you username"
                                    value={usertype}
                                    onChange={(e)=>setUerstype(e.target.value)}
                                    
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>setpassword(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
    </>
  )
}

export default Register
