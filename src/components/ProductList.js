import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const ProductList = () => {
  //bind products in state
  const [products, setProducts] = useState([]);
//use effect whenever page open it will fire tge get product methd which is an api
  useEffect(() => {
    //calling method
    getproducts();
  }, []);

  //calling get produst api 
  const getproducts = async () => {
    let result = await fetch("http://localhost:5000/products",{

    //it will take token from localstroage for product list
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    });
    //convert result into json
    console.log('row redult',result)
    result = await result.json();
    //set result in product state
    
    setProducts(result);
  };

  // console.warn('anas check',products);


  //calling delete APi in Delete Button
  const deleteProduct=(id)=>{
    console.warn(id);
    let result=fetch(`http://localhost:5000/product/${id}`,{
      //specifying method as delete
      method:'Delete',
      headers:{
              authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
    if(result){
      alert("product deleted")
      getproducts();
    }
  }
  //search product api called
  const handleSearch=async(event)=>{
  let key=event.target.value;
  if(key){
    let result=await fetch(`http://localhost:5000/search/${key}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }

    });
    result=await result.json();
    if(result){
      setProducts(result);
    }
  }else{
    getproducts();
  }
  };



  return (
    <div className="product-list Table">
      <h1>Product List</h1>
      <input  type="" className="search-box" placeholder="Search"
      onChange={handleSearch}
      />
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operations</li>
      </ul>
      {
        //cheching if product has any value it will show the product other wise the no match found h1 tag will show 
      products.length>0?products.map((item, index) => (
          <ul key={item._id}>
          <li>{index + 1} </li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>
            <button className="functionButton" onClick={()=>deleteProduct(item._id)}>Delete</button>
            <Link to={"/update/"+item._id}>Update</Link>
          </li>
        </ul>
      )
      //else messgae for no product found
      ):<h1>No Product Match</h1>
    }
    </div>
  );
};
export default ProductList;
