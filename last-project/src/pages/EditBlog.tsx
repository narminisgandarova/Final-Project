import { Button } from 'react-bootstrap'
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editblog } from '../redux/actions/blogaction'
import { removeblog } from '../redux/actions/blogaction'
import BlogForm from './BlogForm'
const EditBlog:React.FC = (props:any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <>
    <h1 className='text-center my-5'>Edit Blog</h1>
       <div className="text-center">
       <Button variant='danger' onClick={()=>{
            dispatch(removeblog({id:props.pvalue.id}))
            navigate('/admin')
        }}><i className="fa-solid fa-trash"></i></Button>
       </div>
        <BlogForm editblog={props.pvalue}
        onFormSubmit={fd=>{
            dispatch(editblog(props.pvalue.id,fd))
            navigate('/admin')
        }}
        />
       <div className="container">
       </div>
    </>
  )
}

const MapStateToProps=(state:string[])=>{
    const link = window.location.pathname.slice(6,99);
    return({
        pvalue:state.find((p:any)=>p.id ===link)
    })
}

export default connect(MapStateToProps)(EditBlog);