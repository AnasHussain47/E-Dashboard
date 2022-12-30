import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateComponent = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [company, setCompany] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetail();
  }, []);

  //integrate get prodcut detail api with fetch method of react js
  const getProductDetail = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.warn(result);

    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  //calling update api for update product
  const UpdateProduct = async () => {
    console.warn(name, price, category, company);

    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
  };

  return (
    <div className="product">
      <h1>Update Product </h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputBox"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="text"
        placeholder="Enter Price of Product"
        className="inputBox"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      <input
        type="text"
        placeholder="Enter Product Category"
        className="inputBox"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      <input
        type="text"
        placeholder="Enter Campany Name"
        className="inputBox"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />
      <button onClick={UpdateProduct} className="appButton">
        Update Product
      </button>
    </div>
  );
};

export default UpdateComponent;
