import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const NotFoundPage = () => {
  return (
    <>
   <div className="not-found">
   <div className="d-flex justify-content-center align-items-center flex-column">
      <img width={400} src='https://rog.asus.com/dist/img/rog-404.jpg' alt="" />
      <h2 className='text-white'>We're Sorry</h2>
      <p className='text-white'>The Page You're Looking for Can't Be Found</p>
    <LinkContainer to='/'>
    <p className='text-danger' >Return To HomePage <i className="fa-solid fa-angle-right"></i></p>
    </LinkContainer>
    </div>
    
   </div>
    
    </>
  )
}

export default NotFoundPage