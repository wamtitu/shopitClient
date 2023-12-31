
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Women() {
  const [mens, setMens] = useState();

  const fetchMens = async()=>{
    const response = await axios.get('https://shopitweb.azurewebsites.net/products/category/women')
    
    setMens(response.data)
   
  }

  useEffect(()=>{
    fetchMens()
  }, [])
  return (
    <>
    <h1>Women products</h1>
  <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px', margin:'auto 5%'}}>
    {
    mens&&mens.map((item, index)=>(
      <ProductCard key={index} item={item} />
    ))
  }
  </div>
  </>
  )
}

export default Women