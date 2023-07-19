import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useWishlist } from 'react-use-wishlist';
import {  useCart } from "react-use-cart";
import { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import UserButton from './UserButton';
import { ThemeContext } from '../context/ThemeContext';
import { LangContext } from '../context/LangContext';
const Header:React.FC = () => {
  const { totalItems} = useCart();
  const { totalWishlistItems } = useWishlist();
  const [query , setQuery] = useState<string>("");
  const [productItem] = useContext(ProductContext);
  const [mode, setMode] = useContext(ThemeContext);
  const [lang,setLang] = useContext(LangContext);
  useEffect(()=>{
    if (localStorage.getItem('mode')===null) {
      localStorage.setItem("mode", "dark")
    }
    if (localStorage.getItem('lang')===null) {
      localStorage.setItem("lang", "en")
    }
  },[])
  
  return (
    <Navbar  expand="lg" className='navbar-dark'>
    <Container>
      <Navbar.Brand>
        <img src="https://www.freepnglogos.com/uploads/logo-asus-png/republic-of-gamers-asus-logo-png-21.png" width={90} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
         <LinkContainer  to='/'>
          <Nav.Link >{lang === 'az' ? 'MƏHSULLAR' : 'PRODUCTS'}</Nav.Link>
         </LinkContainer>
         <LinkContainer to='/about'>
          <Nav.Link >{lang === 'az' ? 'İNNOVASİYA' : 'INNOVATION'}</Nav.Link>
         </LinkContainer>
          <NavDropdown title={lang === 'az' ? 'YÜKLƏMƏLƏR' : 'DOWNLOADS'} id="basic-nav-dropdown" >
           <LinkContainer to='/shop'>
           <NavDropdown.Item >{lang === 'az' ? 'Mağaza' : 'Shop'}</NavDropdown.Item>
           </LinkContainer>
           <LinkContainer to='/shop2'>
           <NavDropdown.Item>
           {lang === 'az' ? 'Mağaza 2' : 'Shop Page 2'}
            </NavDropdown.Item>
           </LinkContainer>
          </NavDropdown>
          {/* <LinkContainer to='/contact'>
          <Nav.Link >COMUNITTY</Nav.Link>
         </LinkContainer> */}
          <LinkContainer to='/support'>
          <Nav.Link >{lang === 'az' ? 'DƏSTƏK' : 'SUPPORT'}</Nav.Link>
         </LinkContainer>
        </Nav>
        <Nav className="ms-auto">
           <Nav.Link>
            <Button variant="dark" onClick={()=>{
              mode === "light" ? setMode('dark') : setMode('light') 
              mode==="light" ? localStorage.setItem('mode' , 'dark') : localStorage.setItem('mode', "light")}}>
                {mode === "light" ? "🌚" : "🌙"}
              </Button>
          </Nav.Link>
         <Nav.Link>
            <Button variant="dark" onClick={()=>{
              lang === "az" ? setLang('en') : setLang('az') 
              lang==="az" ? localStorage.setItem('lang' , 'en') : localStorage.setItem('lang', "az")}}>
                {lang === "en" ? "az" : "en"}
              </Button>
          </Nav.Link>
      <div>
        {/* Button trigger modal */}
        <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="fa-solid fa-magnifying-glass  mt-2"></i>
        </button>
        {/* Modal */}
        <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content ">
              {/* <div className="modal-header">
              </div> */}
              <div className="modal-body">
                <div className="input-group mb-3">
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass text-white mt-2"></i></button>
                  <input type="text" onChange={(e:any)=>{setQuery(e.target.value)}} className="form-control bg-dark text-white" placeholder="..." aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button type="button" className="btn btn-secondary bg-dark" data-bs-dismiss="modal"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <ol >
                  {
                    query.length === 0 ? <></> : productItem.filter((item:any)=>item.title.toLocaleLowerCase().includes(query)).map((item:any)=>{
                      return <li  className="list-group-item list-group-item-action"><Link to={`/shop/${item.id}`}>{item.title}</Link></li>
                    })
                  }
                </ol>
              </div>
                </div>
              </div>
            </div>
          </div>

         <LinkContainer to="/card">
          <Nav.Link ><i className="fa-solid fa-basket-shopping mt-2"></i>({totalItems})</Nav.Link>
         </LinkContainer>
         <LinkContainer to="/wishlist">
          <Nav.Link ><i className="fa-solid fa-heart mt-2"></i>({totalWishlistItems})</Nav.Link>
         </LinkContainer>       
          <UserButton/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header