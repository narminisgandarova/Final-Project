//import { useNavigate } from "react-router";
import {ToastContainer,toast } from 'react-toastify';
interface User{
    email:string,
    pass:string

}
const BuyButton:React.FC = () => {
    const user:User = JSON.parse(localStorage.getItem('myUser')!);
   // const navigate = useNavigate();

    const buyFunc=()=>{
        if (user === null) {
            return (
                toast.warn('You must log in first!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
             //   alert('you must log in first'),
               // navigate('/login')
            //  window.location.reload()
            )
        } else {
            return(
              //  alert('Successfully!'),
              toast.success('Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                }),
                localStorage.removeItem('react-use-cart')
            )
        }
    }


  return (
   <>
    <button onClick={buyFunc}  type="button" className="btn btn-outline-primary my-5">Buy Now</button>
    <ToastContainer
    position="top-center"
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
   </>
  )
}

export default BuyButton