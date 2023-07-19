import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ShopCard from '../components/ShopCard'

const Shop = () => {
  const [productItem] = useContext(ProductContext);
  return (
   <>
   <div className="shop-bg py-5">
     <div className="text-center">
      <h2 className=' fw-bolder fs-1 mt-5'>ARTICLES</h2>
      <p className='text-danger fw-bolder fs-3 '>COMMUNITY</p>
     </div>
     <div className="container">
      <div className="row ">
        {
          productItem.map((item:any,i:number)=>{
             return <ShopCard alldata={item} title={item.title} image={item.photo} id={item.id} key={i} desc={item.desc}  price={item.price}/>
          })
        }
        
      </div>
     </div>
   </div>
   
   
   </>
  )
}

export default Shop