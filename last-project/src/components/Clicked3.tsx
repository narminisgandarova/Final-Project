import Button from 'react-bootstrap/Button';

const Clicked3 = () => {
  return (
    <div className="container">
    <div className="d-flex justify-content-center align-items-center flex-column">
        <p className='fs-1 text-danger'><i className="fa-solid fa-screwdriver-wrench"></i></p>
        <h2 className='fw-bold'>SERVICE AND REPAIR</h2>
        <p>Find service programs and repair information</p>
        <Button variant="danger" className='border-none '>Registration Now</Button>
    </div>
        <hr/>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3>COMMUNITY AND CONTACT INFORMATION</h3>
      <div className="box d-flex justify-content-center  flex-column border border-dark p-3">
        <h5>CUSTOMER’S REQUEST ON PERSONAL DATA</h5>
        <p>Erase & Download Data</p>
      </div>
      </div>

</div>
  )
}

export default Clicked3