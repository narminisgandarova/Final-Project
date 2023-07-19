import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../components/style.css";
import { ProductContext } from '../context/ProductContext';
import { LangContext } from '../context/LangContext';
const Products:React.FC = () => {
    const [productitem] = useContext(ProductContext);
    const [lang] = useContext(LangContext);
   
  return (
    <>
   <div className="bg-light py-5">
   <div className="text-center py-5 fs-3 fw-bolder">{lang === 'az' ? "MƏHSULLARIMIZ" : "EXPLORE OUR PRODUCTS"}</div>
    {/* <div className="container "> */}
    <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {productitem.slice(0,19).map((item:any,i:number)=>{
            return  <SwiperSlide key={i}>
               <div className="d-flex flex-column bg-light">

               <img  src={item.photo} alt="" />
                <p >{item.title}</p>
                <p>{item.price}</p>
               </div>
                
                </SwiperSlide>
        })}

      </Swiper>
    </div>
   {/* </div> */}
    </>
  )
}
export default Products