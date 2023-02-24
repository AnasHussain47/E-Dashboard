import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import bootstrap from 'bootstrap';

export default function SignUp() {

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const [err,setErr]=useState({
  nameError:false,
  emailError:false,
  passwordError:false
});
const navigate=useNavigate();

useEffect(()=>{

 const auth=localStorage.getItem('user');
 if(auth) {
 navigate('/');
 }
},[]);

const handlechangeName=(e)=>{
setName(e.target.value);
}


//method fot sending SignUp form data to the database
const collectData= async()=>{
    console.warn(name,email,password);
   
    //defining url and the method of the request and the data of the body in json.stringfy method
    let result=await fetch("http://localhost:5000/register",{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{'Content-Type':'application/json'
      }
    });
    result=await result.json();
    console.warn(result);
    //storing users credentials in cokkies by localstorage in string format from json
    localStorage.setItem("user",JSON.stringify(result.result))
    localStorage.setItem("token",JSON.stringify(result.auth))
    console.log("auth",result)
    navigate('/');
};






  return (
    <div className="register">
        <h1 className="RegisterHeading">Register</h1>
     <input className="inputBox" type="text" placeholder="Enter Name" value={name} onChange={handlechangeName}/>
     {err.nameError?<span style={{color:"red"}}>Please Enter Valid Name</span>:null}
     <input className="inputBox" type="text"  placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
     <input className="inputBox" type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
     <button className="appButton" onClick={collectData}>Sign Up</button>
    </div>
  )
}
