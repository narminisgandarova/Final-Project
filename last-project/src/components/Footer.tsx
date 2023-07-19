import { LangContext } from "../context/LangContext"
import {useContext} from "react";
const Footer = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
    <div className="footer py-5">
     <div className="container">
     <div className="d-flex justify-content-between ">
        <div className="left py-3">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <p>{lang === "az" ? "HAQQIMIZDA" : "ABOUT ROG"}</p>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <p>{lang === "az" ? "ANA SƏHİFƏ" : "HOME"}</p>

              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <p>{lang === "az" ? "SON MƏLUMATLAR" : "NEWSROOM"}</p>

              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <p>{lang === "az" ? "DƏSTƏK" : "ACCESSIBILITY HELP"}</p>

              </div>
            </div>
        </div>
        <div className="right py-3">
          <div className="d-flex">
          <i className="ms-3 fs-4 fa-brands fa-facebook-f"></i>
          <i className="ms-3 fs-4 fa-brands fa-twitter"></i>
          <i className="ms-3 fs-4 fa-brands fa-discord"></i>
          <i className="ms-3 fs-4 fa-brands fa-youtube"></i>
          <i className="ms-3 fs-4 fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
       <hr/>
       <div className="d-flex justify-content-between">
        <div className="right">
        <i className="fa-solid fa-globe"></i>Global/English
        </div>
        <div className="left">
          <div className="d-flex">
            <p className='ms-2'>{lang === "az" ? "İSTİFADƏ ŞƏRTLƏRİ " : "TERMS OF USE NOTICE"}</p>
            <p className='ms-2'>{lang === "az" ? "GİZLİLİK" : "PRIVACY POLICY"}</p>
            <p className='ms-2'>{lang === "az" ? "©ASUSTEK COMPUTER INC. BÜTÜN HÜQUQLARI QORUNUR" : "©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED"}</p>
          </div>
        </div>
       </div>
     </div>
    </div>
    </>
  )
}

export default Footer