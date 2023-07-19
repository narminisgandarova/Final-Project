import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../context/LangContext';
interface User{
    email:string,
    pass:number
}
const UserButton:React.FC = () => {
    const user:User = JSON.parse(localStorage.getItem('myUser')!);
    const [lang] = useContext(LangContext);
    const LogOut=()=>{
        localStorage.removeItem("react-use-cart");
        localStorage.removeItem("react-use-wishlist");
        localStorage.removeItem("myUser");
        window.location.reload();
    }
    const autUser=()=>{
        if (user === null) {
            return(
                // <NavLink to='/login'/>
               <LinkContainer to='/login'>
                <button  type="button" className="btn border-0" ><i className="fa-solid fa-user"></i></button>
               </LinkContainer>
            )
        }else{
        return(
            <div className="dropdown mt-2  ">
            <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-user "></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark border-0 p-3 mydrop">
               <LinkContainer to='/dashboard'>
               <li>{user.email}</li>
               </LinkContainer>
                <li onClick={LogOut}>{lang === 'az' ? "Çıxış et" :"Log Out"}</li>
            </ul>
            </div>
        )

        }
    }
  return (
    <>
    {autUser()}
    </>
  )
}

export default UserButton