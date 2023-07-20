import React from 'react'
import Header from './components/Header'
import Enjoy from './components/Enjoy'
import QuestionPart from './components/QuestionPart'
import Footer from './components/Footer'

const App = () => {
  return (
     <>
    <div className="main">
    <Header/>
      <div className="d-flex flex-column text-white justify-content-center align-items-center text-center mt-5">
       <div className="text mt-5">
       <h3>Unlimited movies, TV shows, and more</h3>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
   <div className="row justify-content-center align-items-center py-5">
  <div className="col-md-6 d-md-flex flex-md-row flex-sm-column">
    <input className="form-control ms-5 form-control-lg bg-transparent border border-success text-white mb-md-0 mb-3" type="email" placeholder="Email address" aria-label=".form-control-lg example" />
    <button type="button" className="btn btn-danger ms-md-3 ms-sm-0 me-md-0 me-3 mybtn" style={{width:"35%"}}>Get Started <i className="fa-solid fa-angle-right" /></button>
  </div>
</div>

       </div>
      </div>
    </div>
    <div className="saperated"></div>
    <Enjoy/>
    <QuestionPart/>
     <Footer/>
     </>
  )
}

export default App