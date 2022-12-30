import React from 'react'

export default function AddCategory() {
  return (
    <div className='AddCategoryform'>
    
    <form>
  <div className="form-group ">
    <label for="exampleInputEmail1" >Company name</label>
    <input type="email" className="form-control inputBox" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

    <label for="exampleInputEmail1 ">Model Veriant</label>
    <input type="email" className="form-control inputBox" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

    <label for="exampleInputEmail1 ">Description</label>
    <input type="email" className="form-control inputBox" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

    
  </div>
 
  <br></br>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>




    </div>
  )
}
