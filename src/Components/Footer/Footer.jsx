import React from 'react'
import "./Footer.css"
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="container-fluid footerMain">
        <div className="row">
            <div className="col-lg-12 footerinner">
                <hr  className="line"/>
                <div className="footer_upper">
                    <a href=""><div className="social"><BsTwitter className='social_icon'/></div></a>
                    <div className='ownerUpper'>
                        <p className='footerLi'>© 2023 Tip Coin</p>
                        <p className='footerLi'><a href="" className='text-white'>Legal Stuff</a></p>
                    </div>
                    <a href=""><div className="social"><FaTelegramPlane className='social_icon'/></div></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
