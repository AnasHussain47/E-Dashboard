import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CategoryList() {

  const navigate=useNavigate();
  const openAddCategory=()=>{
    navigate("/addcategory")
  }







  return (
    <div className='AboutMainDiv'>
        <button className="categoryAddPAgeBtn" onClick={openAddCategory}>Add Category</button>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Company Name</th>
      <th scope="col">Category Model</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Nokia</td>
      <td>Mobile</td>
      <td>Local menufectured mobile</td>
      <td><button className='categorybutton'>Update</button> <button className='categorybutton'>Delete</button></td>
    </tr>
   
  
  </tbody>
</table>

    </div>
  )
}
