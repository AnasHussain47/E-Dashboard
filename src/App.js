// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Nav from "./components/Nav.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateComponent from "./components/UpdateComponent";
import AboutUs from "./components/AboutUs";
import CategoryList from "./components/CategoryList";
import AddCategory from "./components/AddCategory";
function App() {
  return (
    <>
        <BrowserRouter>
          <Nav />
          
          <Routes>
            <Route element={<PrivateComponent/>}> 
            <Route path="/" element={<ProductList/>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/update/:id" element={<UpdateComponent/>} />
            <Route path="/logout" element={<h1>Logout</h1>} />
            <Route path="/category" element={<AddCategory/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/categorylist" element={<CategoryList/>} />
            <Route path="/addcategory" element={<AddCategory/>} />


            </Route>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="login" element={<Login/>}/>

          </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;
