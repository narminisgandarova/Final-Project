import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import ShopCard from '../components/ShopCard';
import { Button } from 'react-bootstrap';

const Shop2 = () => {
  const [productItem] = useContext(ProductContext);
  const [data,setData] = useState(productItem);

  const filterPrice = (minPrice:number, maxPrice:number)=>{
    const result = productItem.filter((item:any)=>{
      return item.price >= minPrice && item.price <= maxPrice
    });
    setData(result)
  }
  return (
  <>
 <div className="shop2 py-3">
 <div className="container ">
    <h3 className='fw-bolder myelement fs-1 mt-4'>ROG ZENITH</h3>
  </div>
    <img style={{width:"100%"}} src="https://dlcdnwebimgs.asus.com/gain/53591818-DBAF-456B-B2F4-765F13CFEBDB" alt="" />
  <div className="container my-5">
    <Button variant="dark" className='mb-3' onClick={()=>{filterPrice(0,6200)}}>view all</Button>
    <div className="row g-3">
      <div className="col-12 col-sm-6 col-md-4">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Price
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div className="accordion-body">
                    <ul className="list-group ">
                  <li className="list-group-item border-0">
                  <Button className='mybtn' onClick={()=>{filterPrice(50,100)}}  >50-100$</Button>
                  </li>
                  <li className="list-group-item border-0">
                  <Button className='mybtn' onClick={()=>{filterPrice(100,500)}} >100-500$</Button>
                  </li>
                  <li className="list-group-item border-0">
                  <Button className='mybtn' onClick={()=>{filterPrice(500,1000)
                  }} >500-1000$</Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                PLATFORM
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div className="accordion-body">
              <ul className="list-group ">
                  <li className="list-group-item border-0">
                    <input className="form-check-input me-1" type="checkbox"  id="firstCheckbox" />
                    <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
                  </li>
                  <li className="list-group-item border-0">
                    <input className="form-check-input me-1" type="checkbox"  id="secondCheckbox" />
                    <label className="form-check-label" htmlFor="secondCheckbox">Second checkbox</label>
                  </li>
                  <li className="list-group-item border-0">
                    <input className="form-check-input me-1" type="checkbox"  id="thirdCheckbox" />
                    <label className="form-check-label" htmlFor="thirdCheckbox">Third checkbox</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              SOCKET
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
              <div className="accordion-body">
              <ul className="list-group ">
                  <li className="list-group-item border-0">
                    <input className="form-check-input me-1" type="checkbox"  id="firstCheckbox" />
                    <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
                  </li>
                  <li className="list-group-item border-0">
                    <input className="form-check-input me-1" type="checkbox"  id="secondCheckbox" />
                    <label className="form-check-label" htmlFor="secondCheckbox">Second checkbox</label>
                  </li>
                  <li className="list-group-item border-0">
                    <input className="form-check-input me-1" type="checkbox"  id="thirdCheckbox" />
                    <label className="form-check-label" htmlFor="thirdCheckbox">Third checkbox</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
              CHIPSET
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
              <div className="accordion-body">
              <ul className="list-group ">
                  <li className="list-group-item border-0">
                    <input className="form-check-input me-1" type="checkbox"  id="firstCheckbox" />
                    <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
                  </li>
                  <li className="list-group-item border-0">
                    <input className="form-check-input me-1" type="checkbox"  id="secondCheckbox" />
                    <label className="form-check-label" htmlFor="secondCheckbox">Second checkbox</label>
                  </li>
                  <li className="list-group-item border-0">
                    <input className="form-check-input me-1" type="checkbox"  id="thirdCheckbox" />
                    <label className="form-check-label" htmlFor="thirdCheckbox">Third checkbox</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        {
          data.map((item:any,i:number)=>{
            return (
              <ShopCard title={item.title} desc={item.desc} image={item.photo}  alldata={item} price={item.price} id={item.id} key={item.id} />
            )
          })
        }
    </div>
  </div>
 </div>
   
  
  </>
  )
}

export default Shop2