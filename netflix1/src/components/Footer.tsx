import React from 'react'

const Footer = () => {
  return (
  <>
  <div className="footer">
    <div className="container py-3">
        <ul className='list-unstyled e'>
        <li className=' text-decoration-underline '>Questions? Contact us.</li>
        </ul>

        <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
            <ul className='list-unstyled e'>
                <li className=' text-decoration-underline '>FAQ</li>
                <li className=' text-decoration-underline '>Media Center</li>
                <li className=' text-decoration-underline '>Ways to Watch</li>
                <li className=' text-decoration-underline '>Cookie Preferences</li>
                <li className=' text-decoration-underline '>Speed Test</li>
             </ul>
            <div className="btn-group" style={{width:"30%"}}>
            <button type="button" className="btn btn-ransparent dropdown-toggle border border-light rounded-0 text-white " data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-globe"></i> English
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">English</a></li>
                <li><a className="dropdown-item" href="#">Русский</a></li>
            </ul>
            </div>
            <p >Netflix Azerbaijan</p>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
            <ul className='list-unstyled e'>
                <li className=' text-decoration-underline '>Help Center</li>
                <li className=' text-decoration-underline '>Investor Relations</li>
                <li className=' text-decoration-underline '>Terms of Use</li>
                <li className=' text-decoration-underline '>Corporate Information</li>
                <li className=' text-decoration-underline '>Legal Notices</li>
            </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
            <ul className='list-unstyled e'>
                <li className=' text-decoration-underline '>Account</li>
                <li className=' text-decoration-underline '>Jobs</li>
                <li className=' text-decoration-underline '>Privacy</li>
                <li className=' text-decoration-underline '>Contact Us</li>
                <li className=' text-decoration-underline '>Only on Netflix</li>
            </ul>
            </div>
        </div>
    </div>
  </div>
  
  </>
  )
}

export default Footer