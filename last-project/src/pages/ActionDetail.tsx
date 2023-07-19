import { useContext } from 'react'
import { useParams } from 'react-router'
import { ProductContext } from '../context/ProductContext';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const ActionDetail:React.FC = () => {
    const{url} = useParams();
    const [productItem] = useContext(ProductContext);
    const productDetail = productItem.find((p: any)=> p.id == url);
  return (
   <>
{
    productDetail === undefined ?  <h1>laoding</h1> :
    <div className="detail py-5">
<div className="container">
    <p className='text-muted'><i className="fa-solid fa-calendar"></i>APR 17, 2023  | <i className="fa-solid fa-pen"></i>WRITTEN BY:WHITSON GORDON</p>
    <h2 className='text-white'>{productDetail.title}</h2>
    <p className='text-muted'>Articles:</p>
    <p className='text-muted'>Article Tags:</p>
    <hr/>
    <img src={productDetail.photo} width={300} alt="" />
    <p>{productDetail.desc}</p>
    <img className='my-5' src={productDetail.photo1} style={{width:"100%"}} alt="" />
    <p>{productDetail.desc1}</p>
    <LinkContainer to="/shop">
    <Button variant="outline-light">Go Back</Button>
    </LinkContainer>
</div>
</div>
}
   
   </>
  )
}

export default ActionDetail