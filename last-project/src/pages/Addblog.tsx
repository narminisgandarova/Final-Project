import React from 'react'
import BlogForm from './BlogForm';
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import {addblog} from '../redux/actions/blogaction'
const AddBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <h1 className='text-center my-5'>Add Blog</h1>
      <BlogForm onFormSubmit={(fd: any) => {
        dispatch(addblog(fd))
        navigate('/admin')

      } } editblog={undefined}/>
    </>
  )
}

export default connect()(AddBlog)