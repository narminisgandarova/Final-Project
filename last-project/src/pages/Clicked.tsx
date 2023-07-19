import Button from 'react-bootstrap/Button';

const Clicked = () => {
  return (
    <>
    <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column">
            <p className='fs-1 text-danger'><i className="fa-solid fa-download"></i></p>
            <h2 className='fw-bold'>DRIVERS AND MANUALS</h2>
            <p>Download drivers, software, firmware and user manuals.</p>
            <Button variant="danger" className='border-none '>Enter Download Center</Button>
        </div>
            <hr/>
          <div className="d-flex justify-content-center align-items-center flex-column">
          <h3 className='fw-bold text-center'>SELF-SERVICE APPS</h3>
          <div className="box d-flex justify-content-center  flex-column border border-dark p-3">
            <h5>MYASUS APP</h5>
            <p>A simple, reliable and quick way to connect our customer <br/> service department</p>

          </div>
          </div>

    </div>
    
    </>
  )
}

export default Clicked