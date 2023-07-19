import React, { useContext } from 'react'
import Products from '../components/Products'
import Recent from '../components/Recent'
import Action from '../components/Action'
import Art from '../components/Art'
import { LinkContainer } from 'react-router-bootstrap'
import { LangContext } from '../context/LangContext'

const Home = () => {
  const [lang] = useContext(LangContext);
  return (
    <>
   <LinkContainer to='/login'>
   <div className="account ">
        <div className="text-center">{lang === "az" ? "Daha yaxşı məhsul dəstəyi üçün hesab yaradın!": "Create an account for better product support!"}</div>
      </div>
   </LinkContainer>

   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={5} aria-label="Slide 6" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://dlcdnwebimgs.asus.com/gain/B9F4EEC6-D09A-4BFF-A48B-6F50E36CB1BC/fwebp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://dlcdnwebimgs.asus.com/gain/DAE0496E-F9F5-49C2-80DB-798085054063/fwebp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://dlcdnwebimgs.asus.com/gain/5D9201C6-BB3C-4784-BEF2-347503D56480/fwebp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://dlcdnwebimgs.asus.com/gain/28D481CD-8EE3-4EA4-949F-43104F2207A6/fwebp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://dlcdnwebimgs.asus.com/gain/6334A4EB-86ED-4753-9320-E0D1434386DC/fwebp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://dlcdnwebimgs.asus.com/gain/201B7045-00D7-4EEE-A8DC-EA6CFA0961D7/fwebp" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
 
<Products/>
<Recent/>
<Action/>
<Art/>
        
    </>
  )
}

export default Home