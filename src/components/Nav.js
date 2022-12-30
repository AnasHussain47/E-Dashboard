import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/logo.png'


export default function Nav() {

  const auth=localStorage.getItem('user');
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup');
    
  }

  return (

<div className="nav-ul">

<img className="logo"  src={logo} alt="horse" />


  { auth?
      <ul >
        <li className="button"><Link to="/">Products</Link></li>
        <li className="button" ><Link to="/add">Add Prodcut</Link></li>
        <li className="button"><Link to="/categorylist">Category</Link></li>
        <li className="button"><Link to="/about">About</Link></li>

        <li className="button"><Link onClick={logout} to="/signup">Logout ( {JSON.parse(auth).name})</Link></li>
        </ul>

        :
         <ul className="nav-right">
         <li className="button">  <Link to="/signup">Sign Up</Link></li> 
         <li className="button"> <Link to="login">Login</Link></li>
         </ul>

  }
    </div>
    

  );
}
    