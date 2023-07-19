import Button from 'react-bootstrap/Button';
import { useWishlist } from 'react-use-wishlist';
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from 'react-use-cart';
const WishList = () => {
  const { addItem } = useCart();
  const {
    isWishlistEmpty,
    items,
    removeWishlistItem,
  } = useWishlist();
  if (isWishlistEmpty) return <><div className="text-center  fs-3" style={{backgroundColor:"#000"}}>Wishlist is empty</div><img style={{width:"100%"}} src="https://a-static.besthdwallpaper.com/asus-rog-republic-of-gamers-neon-red-logo-wallpaper-3200x1200-63890_90.jpg" alt="" /></>;
  const notify = () => toast.error('Removed from WishList!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    }); 
   
  const notify2 =()=>toast.success('Added to cart!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
   

    const uniqueItemsIds = new Set();
    const uniqueItems = items.filter((item)=>{
      if(uniqueItemsIds.has(item.id)){
        return false
      }else{
        uniqueItemsIds.add(item.id);
        return true;
      }
    });

    
  return (
   <>
 <div className="wishList ">
   <div className="container">
   <div className="row g-3">
    {
      uniqueItems.map((item:any, i:number)=>{
        return <div className="col-12 col-sm-6 col-md-6" key={i} >
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.photo} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
             <div className="d-flex flex-column">
             <h5 className="card-title ">{item.title}</h5>
             <p className="card-title ">{item.desc.substring(0,30)}...</p>
             <h5 className="card-title ">{item.price}$</h5>
             </div>
            </div>
             <div className="d-flex">
             <Button type="button" className=" mybox  ms-3 mb-3" onClick={() => {removeWishlistItem(item.id);notify()}}><i className="fa-regular fa-heart "></i></Button>
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
                 <Button type="button" className=" mybox  ms-3 mb-3" onClick={() => {addItem(item);notify2()}}><i className="fa-solid fa-cart-plus"></i></Button>
                 <ToastContainer
                  position="top-right"
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
          </div>
        </div>
      </div>
    </div>
      })}
    </div>
   </div>
 </div>
  
   </>
  )
}

export default WishList