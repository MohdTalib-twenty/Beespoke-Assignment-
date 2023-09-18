import React, { useState } from "react";
import "./screens.css";
import {useNavigate,Link} from 'react-router-dom'
import {toast} from 'react-toastify'
export default function Login() {
    const navigate = useNavigate();
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit=async()=>{
    var result = await fetch("http://localhost:8000/api/auth/login",{
        method : "Post",
        body : JSON.stringify({name,password}),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    var data = await result.json();
    if(data.success){
        toast.success(data.message)
        localStorage.setItem("User",JSON.stringify(data.findUser))
        navigate('/')
    }else{
        toast.warning(data.message);
    }
  }
  return (
    <>
      <div className="form-container">
        <div className="card card-register px-5 py-5">
          <div className=" mt-2">
            <h2 className="text-center fs-2">
              LogIn
            </h2>
          </div>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
               Name
            </label>
            <input
              type="text"
              className="form-control"
        
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          

          <div className="d-flex flex-row">
            <p>
              New User ? <Link to="/signup">LogIn</Link>
            </p>
          </div>
          <button type="submit" className="    btn text-white fw-bold"  style={{backgroundColor:"#881488"}} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
