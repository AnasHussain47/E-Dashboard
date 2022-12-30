import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [company, setCompany] = useState();
  const [error,setError]=useState(false);
  const navigate=useNavigate();

  const addProduct=async()=>{
if(!name|| !price || !category || !company ){
    setError(true);
    return false;
}

      console.warn(name,price,category,company);
      //getting user id wich is logged in bu localStorage
      const userId=JSON.parse( localStorage.getItem("user"))._id;
      console.warn(userId);

      //calling Add Product API
      let result= await fetch("http://localhost:5000/add-product",{
        method:"post",
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
            'Content-type':'application/json',
            authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      });
        result=result.json();
        // redireting to the main product list page after adding a new record 
        navigate("/")
        console.warn(result);

  }
  return (
    <div className="product">
      <h1>Add Product </h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputBox"
        onChange={(e)=>{setName(e.target.value)}}
        value={name}
      />
         {error&& !name && <span className="invalid-input">*Please enter name</span>}
      <input
        type="text"
        placeholder="Enter Price of Product"
        className="inputBox"
        onChange={(e)=>{setPrice(e.target.value)}}
        value={price}
      />
      {error&& !price && <span className="invalid-input">*Please enter price</span>}
      <input
        type="text"
        placeholder="Enter Product Category"
        className="inputBox"
        onChange={(e)=>{setCategory(e.target.value)}}
        value={category}
      />
      {error&& !category && <span className="invalid-input">*Please enter category</span>}
      <input
        type="text"
        placeholder="Enter Campany Name"
        className="inputBox"
        onChange={(e)=>{setCompany(e.target.value)}}
        value={company}
      />
      {error&& !company && <span className="invalid-input">*Please enter company</span>}
      <button onClick={addProduct} className="appButton">Add Product</button>
    </div>
  );
};

export default AddProduct;
