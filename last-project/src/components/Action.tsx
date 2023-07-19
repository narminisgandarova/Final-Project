import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import SingleCardAction from './SingleCardAction';
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../context/LangContext';

const Action = () => {
    const [productitem] = useContext(ProductContext);
    const [lang] = useContext(LangContext);
  return (
    <>
   <div className="bg py-3">
   <div className="text-center fs-2 fw-bolder my-5">{lang=== "az" ? "ROG'UN FƏALİYYƏTİ" : "ROG IN ACTION"}</div>
  <div className="container">
  <div className="row">
  {
        productitem.slice(23,27).map((item:any, i:number)=>{
            return <SingleCardAction title={item.title} photo={item.photo} id={item.id} key={i}/>
        })
    }
  </div>
  <div className="text-center mt-4 text-danger fs-4 mytext">
            <LinkContainer to='/shop'>
            <p >{lang === "az" ? "Daha Çox" : "Learn More"}<i className="fa-solid fa-chevron-right"></i></p>
            </LinkContainer>
            
            </div>
  </div>
   </div>
    </>
  )
}

export default Action