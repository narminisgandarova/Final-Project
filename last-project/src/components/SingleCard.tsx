import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const SingleCard = (props:any) => {
  return (
  <>
<LinkContainer to={`/${props.id}`}>
<div className="col-12 col-sm-6 col-md-6 ">
  <div className="card bg-dark position-relative" >
     <img src={props.photo} className="card-img-top" alt="..." />
     <div className="card-body position-absolute" style={{bottom:"10px"}}>
         <p className="card-text text-white  fs-5">{props.title}</p>
     </div>
     </div>
  </div>
</LinkContainer>

  </>
  )
}

export default SingleCard