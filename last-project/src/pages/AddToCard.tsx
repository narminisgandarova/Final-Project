import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import BuyButton from '../components/BuyButton';
const AddToCard = () => {
    const{items,updateItemQuantity,removeItem,  isEmpty,cartTotal } = useCart();
    const notify = () => toast.error('Deleted successfully!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      }); 
  return (
   <>
  {
    isEmpty ? <div className="d-flex justify-content-center align-items-center "><img style={{width:"100%"}} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2434d52-5bf9-43b4-b9aa-cc5a28c70ab6/d9vx2p4-9090af82-70d1-410b-9fb0-d05baa00e507.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyNDM0ZDUyLTViZjktNDNiNC1iOWFhLWNjNWEyOGM3MGFiNlwvZDl2eDJwNC05MDkwYWY4Mi03MGQxLTQxMGItOWZiMC1kMDViYWEwMGU1MDcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fpbeXzJs2qUU5yx3MIvxp9jwp6eheIQZ_6BfsemrZiA' alt="" /></div> : <div className="addtocard ">
   <div className="container">
   <div className="row g-3">
    {
      items.map((item:any, i:number)=>{
        return <div className="col-12 col-sm-6 col-md-6" key={i}>
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.photo} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
             <div className="d-flex">
             <h5 className="card-title">{item.title}</h5>
              <button type="button" className="btn mybtn  ms-3" onClick={() =>{removeItem(item.id);notify()}}><i className="fa-solid fa-trash"></i></button>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
             </div>
              <p className="card-text">{item.price*item.quantity}$</p>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                  <button type="button" className="btn btn-outline-secondary"  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                  <button type="button" className="btn btn-outline-secondary">{item.quantity}</button>
                  <button type="button" className="btn btn-outline-secondary" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      })}
    <h4 >Total Price : {cartTotal}$</h4>
    <div className="col-4 cart-button">
    {/* <LinkContainer to='/login'>
    <Button variant="outline-success" className='my-5 ' >Buy Now</Button>
    </LinkContainer> */}
    <BuyButton/>
    <p >Do you have an account?</p>
    </div>
    </div>
   </div>
 </div>
  }
   </>
  )
}

export default AddToCard