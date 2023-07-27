import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import { getProducts } from '../redux/apiCalls'
import {useSelector, useDispatch} from 'react-redux'
import '../styles/home.css' 

function Home() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [query, setQuery] =useState('')
  const products = useSelector((state) => state.products)


  useEffect(()=>{
     getProducts(dispatch)
  }, [dispatch])

 

  useEffect(()=>{
    setItems(products.products)
  },[products])
  // console.log(query)


  return (
    <>
     <div style={{display:'flex', alignItems:'center', gap:'30px'}}>
     <h1>TOP products</h1> 
       <div className="search">
                <input type="text" onChange={(e)=>setQuery(e.target.value)}/>
                <button>search</button>
       </div>
     </div>
    <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px', margin:'auto 5%'}}>
      {
      items&&items.filter((item)=>item.brandName.toLowerCase().includes(query)).map((item, index)=>(
        <ProductCard key={index} item={item} />
      ))
    }
    </div>
    </>


    
  )
}

export default Home