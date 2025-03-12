import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import api from "../../api"
import { ProductContext } from '../../context/productContext';


function Header() {
const {setSelectedCategory} =useContext(ProductContext)

const [categories,setCategories]=useState([]);

 useEffect(()=>{
  api.get("/products/categories")
  .then((res)=>{
    setCategories(res.data);
  });
 },[]);

  return (
    <header>  
    <nav className="navbar navbar-expand-lg bg-secondary p-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <div className='d-flex gap-2 p-2'>
    <span className='text-primary'>
        <FaShoppingBag  style={{fontSize:30}}/>
        </span>
       <span className='fw-bold fs-4'>Context Store  </span> 
       </div>
        </a>
    
    <button 
    className="navbar-toggler"
     type="button" 
     data-bs-toggle="collapse"
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav"
       aria-expanded="false" 
       aria-label="Toggle navigation">
     
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-center">
      <li className="nav-item"> 
       <NavLink  className="nav-link text-primary" to="/">
         Home
          </NavLink>
          </li>
      <li className="nav-item">
      <NavLink className="nav-link text-primary"to="/basket" > 
        Basket
       </NavLink>
       </li>

       <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Categories
          </a>
          <ul className="dropdown-menu">
         {categories.map((category,index)=>( 

          <button key={index} className="dropdown-item text-center" href="#" onClick={()=>setSelectedCategory(category)}>{category}    
            </button>
        
         ))}
       </ul>
        </li>
     </ul>
    </div>
  </div>
</nav>
</header>
  )
}

export default Header;