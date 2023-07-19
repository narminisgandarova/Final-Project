import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import SingleCard from './SingleCard';
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../context/LangContext';

const Recent = () => {
    const [productitem] = useContext(ProductContext);
    const [lang] = useContext(LangContext);
  return (
    <>
    <div className="recent py-3">
        <div className="text-center fs-1 text-white fw-bolder py-5">{lang==='az' ?  "SON MƏHSULLAR" :"RECENT STORIES"}</div>
        <div className="container">
        <div className="row g-3">
        {
            productitem.slice(19,23).map((item:any, i:number)=>{
              return  <SingleCard photo={item.photo} title={item.title} id={item.id} key={i}/>
            })
          }
        </div>
        <div className="text-center mt-4 text-danger fs-4 mytext">
            <LinkContainer to='/shop'>
            <p>{lang === "az" ? "Daha Çox" : "Learn More"}<i className="fa-solid fa-chevron-right"></i></p>
            </LinkContainer>
            
            </div>
        </div>





    </div>
    
    
    
    </>
  )
}

export default Recent