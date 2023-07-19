import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const SingleCardAction = (props:any) => {
  return (
   <>
   <LinkContainer to={`/${props.id}`}>
   <div className="col-12 col-sm-6 col-md-4">
  <div className="card bg-light border-0" >
     <img src={props.photo} className="card-img-top" alt="..." />
     <div className="card-body">
        <p className='text-danger'><i className="fa-solid fa-square"></i>GAMING</p>
         <p className="card-text text-dark">{props.title}</p>
     </div>
     </div>
  </div>
   </LinkContainer>
   
   </>
  )
}

export default SingleCardAction