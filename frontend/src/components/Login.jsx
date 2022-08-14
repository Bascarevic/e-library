import React from 'react'
import { useState } from "react"
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import '../style/LoginAndRegister.css';

 
const Login = () => {
 
    const[userData, setUserData] = useState({
        email:"",
        password: "",
    });
 
    //let navigate = useNavigate();
 
    function handleInput(e){
      /*
        let newUserData = userData;
        newUserData[e.target.name] = e.target.value;
        console.log(newUserData)
        setUserData(newUserData);
        */
        e.persist();
       setUserData({
         ...userData,
         [e.target.name]: e.target.value,
       })
    }
 
    function handleLogin(e){
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/login", userData).then(res=>{
            console.log(res.data);
            if(res.data.success === true){
              window.sessionStorage.setItem('auth_token', res.data.access_token);
              window.sessionStorage.setItem('user_type', res.data.user_type[0].role_name);
              window.sessionStorage.setItem('user_id', res.data.user_id);
              window.location.href = '/'
              //  addToken(res.data.access_token);
              //  navigate("/");
              alert("Uspesno ste ulogovani")
            }
        }).catch(e=>{
          alert("Problem sa prijavom. Unesite podatke ponovo.")
            console.log(e)
        });
    }
 
  return (
    <div class="login-page">
    <div class="form">
      <form  onSubmit={handleLogin} class="login-form">
        <input type="email" placeholder="email" name="email" onInput={handleInput}/>
        <input type="password" placeholder="password" name="password" onInput={handleInput}/>
        <button type='sumbit'>login</button>
        <p className="small fw-bold mt-2 pt-1 nb-0">You don't have account?
        <a href="/register" className="link-danger">Register</a></p>
      </form>
    </div>
  </div>
  )
}
 
export default Login
