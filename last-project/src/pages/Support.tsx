import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ProductContext } from '../context/ProductContext';
import {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Clicked from './Clicked';
import Clicked2 from './Clicked2';
import Clicked3 from '../components/Clicked3';
import { LangContext } from '../context/LangContext';

interface propType{
   photo:string,
   title:string
}
const Support:React.FC<propType> = () => {
    const [productItem] = useContext(ProductContext);
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [lang] = useContext(LangContext);
    const handleClick=()=>{
      setIsClicked(!isClicked);
      console.log('a');
    };
    const handleClick2=()=>{
      setIsClicked2(!isClicked2);
    };
    const handleClick3=()=>{
      setIsClicked3(!isClicked3);
    };
  return (
   <>
   <div className="support">
     <div className="container">
     <div className="text ">
        <h2 className='fs-1'>{lang=== "az" ? "Dəstək üçün Biz Burdayıq!" : "We're Here To Help!"}</h2>
        <p>Need support while you're working, studying, and enjoying the leisure from home? ASUS is here for you.<br/>
            Please refer to Support While You're Safe at Home</p>
         <div className="input">
         <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
        <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"    placeholder='Please describe your problem'
        />
      </InputGroup>
         </div>
      </div>
     </div>
   </div>
   <div className="select">
    <div className="text-center my-4 fs-2 fw-bolder">{lang === "az" ? "MƏHSUL SEÇ" : "SELECT A PRODUCT"}</div>
    <div className="container">
        <div className="row my-5">
        {
            productItem.slice(0,6 ).map((item:any, i:number)=>{
                return <div className="col-12 col-sm-6 col-md-2" key={i}>
                     <Card style={{"border":"none" , "backgroundColor": "transparent"}}>
                <Card.Img variant="top" src={item.photo} />
                <Card.Body>
                  <Card.Title className='text-center title'>{item.title}</Card.Title>
                </Card.Body>
              </Card>
                </div>
            })
         }
        </div>
        {/* daha sonra duzelis olunacaq */}
        <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex my-4">
        <Button variant="outline-dark ms-5" onClick={handleClick}><i className="fa-solid fa-download"></i>{lang === "az" ? "Sürücülər və Moanuallar" : "Drivers and Moanuals"}</Button>
        <Button variant="outline-dark ms-5" onClick={handleClick2}><i className="fa-solid fa-calendar-check"></i>{lang === "az" ? "Zəmanət və Qeydiyyat" : "Warranty and Registration"}</Button>
        <Button variant="outline-dark ms-5" onClick={handleClick3}><i className="fa-solid fa-screwdriver-wrench"></i>{lang === "az" ? "Xidmət və Təmir" : "Service and Repair"}</Button>
        </div>
        </div>
        {isClicked  &&  <Clicked/>}
        {isClicked2 && !isClicked && <Clicked2/>}
        {isClicked3 && !isClicked && !isClicked2 && <Clicked3/>}
    </div>
   </div>
        <div className="contact mt-3">
          <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-8">
              <div className="text">
              <h2>{lang === "az" ? "Xəbərlər & Elan" : "News & Announcement"}</h2>
              <p>2023/03/22</p>
              <p className='fs-5'>ASUS Announces NVIDIA-Certified Servers and ProArt Studiobook Pro 16 OLED at GTC</p>
              <p>Introducing new GPU servers and a creator laptop with support for the NVIDIA Ada Lovelace GPU architecture to deliver next-gen AI acceleration</p>     
              <p>2023/03/20</p>
              <p className='fs-5'>ASUS Pro WS W790E-SAGE SE Sets 10 World Records and Wins 23 1st Places</p>
              <p>An international team of overclockers sets global performance benchmarks with Intel Xeon Sapphire Rapids processors using an ASUS W790 workstation motherboard</p>   
              </div> 
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <h2>{lang === "az" ? "ƏLAQƏ" : "Contact Us"}</h2>
                <p className='fs-4'><i className="fa-regular fa-envelope me-3 "></i>{lang === "az" ? "EMAİL YAZ" : "Email us"}</p>
                <p className='fs-4'><i className="fa-solid fa-phone-volume me-3"></i>{lang === "az" ? "ZƏNG ET" : "Call Us"}</p>
            </div>
          </div>
          </div>
        </div>
   
   </>
  )
}

export default Support