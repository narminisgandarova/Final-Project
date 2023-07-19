import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import { useWishlist } from 'react-use-wishlist';

interface propType {
  image: string,
  title: string,
  desc: string,
  id: number,
  alldata: any,
  price: number
}

function ShopCard({ image, title, desc, id, alldata, price }: propType) {
  const { addWishlistItem } = useWishlist();
  const { items } = useWishlist();
  const { addItem } = useCart();
  const notify = () => toast.success('Added successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  const notify1 = () => toast.info('🦄 Added to wishlist!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  const handleAddToCart = () => {
    addItem(alldata);
    notify();
  }

  const handleAddToWishlist = () => {
    const isCardInWishlist = items.find((item: any) => item.id === id);
    if (isCardInWishlist) {
      alert('This card is already in your wishlist!');
    } else {
      addWishlistItem(alldata);
      notify1();
    }
  };
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 ">
        <div className="card card-com  ">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className='text-muted'>Apr 12, 2023</p>
            <p className="card-text">{desc.substring(0, 150)}...</p>
            <p className="card-text">{price}$</p>
            <div className="d-flex">
              <LinkContainer to={`/shop/${id}`}>
                <button className='fs-5 btn btn-outline-secondary me-3' ><i className="fa-regular fa-circle-right fs-4 ms-2"></i></button>
              </LinkContainer>
                <Button className='fs-5 btn btn-outline-secondary bg-transparent me-3' onClick={handleAddToWishlist} ><i className="fa-solid fa-heart fs-5 text-secondary ms-2"></i></Button>
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
              <Button variant="btn btn-outline-secondary" onClick={handleAddToCart}><i className="fa-solid fa-bag-shopping"></i></Button>
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


    </>
  )
}

export default ShopCard
