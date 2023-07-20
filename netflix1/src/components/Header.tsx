import React from 'react'

const Header = () => {
  return (
    <>
    <div className="sticky-top">
    <div className="container py-4">
        <div className="d-flex justify-content-between">
            <div className="left">
                <img width={140} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            </div>
            <div className="right d-flex">
                <div className="btn-group">
            <button type="button" className="btn btn-ransparent dropdown-toggle border border-light rounded-0 text-white" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-globe"></i> English
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">English</a></li>
                <li><a className="dropdown-item" href="#">Русский</a></li>
            </ul>
            </div>
            <button type="button" className="btn btn-danger ms-3 shadow-none mybtn">Sign In</button>

            </div>
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Header