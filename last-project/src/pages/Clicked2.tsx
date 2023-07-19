import Button from 'react-bootstrap/Button';

const Clicked2 = () => {
  return (
    <div className="container">
    <div className="d-flex justify-content-center align-items-center flex-column">
        <p className='fs-1 text-danger'><i className="fa-solid fa-calendar-check"></i></p>
        <h2 className='fw-bold'>WARRANTY AND REGISTRATION</h2>
        <p>Warranty terms and product registration</p>
        <Button variant="danger" className='border-none '>Registration Now</Button>
    </div>
        <hr/>
      <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="box d-flex justify-content-center  flex-column border border-dark p-3">
        <h5>ASUS PREMIUM CARE</h5>
        <p>Extensive protection for your ASUS device.</p>
      </div>
      </div>

</div>
  )
}

export default Clicked2