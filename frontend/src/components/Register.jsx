import React from 'react'
import '../style/LoginAndRegister.css'
import { useState } from "react"
import {useNavigate} from "react-router-dom";
import axios from "axios";
 
function Register() {
 
    const[userData, setUserData] = useState({
        name_and_surname: "",
        email:"",
        password: "",
    });
 
    let navigate = useNavigate();
   
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
    function handleRegister(e){
        e.preventDefault();
        console.log(userData);
        axios.post("http://127.0.0.1:8000/api/register", userData).then(res=>{
            console.log(res.data);
            if(res.data.success){
            window.sessionStorage.setItem('auth_token', res.data.access_token);
            window.sessionStorage.setItem('user_type', res.data.user_type);
            window.sessionStorage.setItem('user_id', res.data.user_id);
            }else{
              alert('Greska!');
            }
            alert("Uspesno ste se registrovali!")
            navigate("/");
        }).catch(e=>{
            console.log(e)
        });
    }
  return (
    <div class="register-page">
    <div class="form">
      <form onSubmit={handleRegister} class="register-form">
      <input type="text" placeholder="name and surname" name="name_and_surname" onInput={handleInput}/>
        <input type="email" placeholder="email" name="email" onInput={handleInput}/>
        <input type="password" placeholder="password" name="password" onInput={handleInput}/>
        <button type='sumbit'>register</button>
      </form>
    </div>
  </div>
  )
}
 
export default Register