import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../context/LangContext';
import {ToastContainer,toast } from 'react-toastify';
const user={
  email:"narmin.isg@gmail.com",
  pass:"123"
}

const Login = () => {
  const [lang] = useContext(LangContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate=useNavigate();
  const formSubmit=(e:React.FormEvent)=>{
     e.preventDefault();
     if (!emailRef.current?.value || !passRef.current?.value) {
      alert('please, fill input')
  }else{
      if (emailRef.current.value === user.email && passRef.current.value === user.pass) {
         //alert('login success');
          toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          localStorage.setItem('myUser', JSON.stringify(user));
         window.location.reload();
         navigate('/card')
      }else{
          alert('email or password is wrong')
      }
  }
  }
  return (
   <>
   <div className="container">
   <div className="d-flex justify-content-center align-items-center my-5">
     <div className="login ">
      <img  src="https://www.freepnglogos.com/uploads/logo-asus-png/republic-of-gamers-asus-logo-png-21.png" width={100} alt="" />
     <div className="col-6">
    <h2 className='text-center fw-bolder mt-5'>{lang === "az" ? "Daxil Ol" : "Account Login"}</h2>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">{lang === "az" ? "Hesabınız" : "Account"}</label>
          <input type="email" ref={emailRef}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div className="form-text ">{lang === "az" ? "Emailinizi daxil edin" : "Please enter your email."}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">{lang === "az" ? "Şifrə" : "Password"}</label>
          <input type="password"  ref={passRef} className="form-control" id="exampleInputPassword1" />
          <div className="form-text">{lang === "az" ? "Zəhmət olmasa 8~25 aralığında simvol daxil edin" : "Please input 8~25 characters."}</div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">{lang === "az" ? "Yaddaşda saxla" : "Remember Me"}</label>
        </div>
        <button type="submit" className="btn mybtn">{lang === "az" ? "Daxil Ol" : "Sign In"}</button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      </form>
    </div>
     </div>
   </div>
   </div>
   
   
   </>
  )
}

export default Login