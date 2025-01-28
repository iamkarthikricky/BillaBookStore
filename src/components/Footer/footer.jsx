import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

import './footer.css'
import { useSelector } from "react-redux";

const partnerLogosList=[
    { 
        id:1,
        src:"https://img.icons8.com/color/96/bhim.png",
        alt:"bhim"
    },
    {
        id:2,
        src:"https://img.icons8.com/color/96/google-pay.png",
        alt:"google-pay"
    },
    {
        id:3,
        src:"https://img.icons8.com/color/96/phone-pe.png",
        alt:"phone-pe"
    },
    {
        id:4,
        src:"https://img.icons8.com/color/96/paytm.png",
        alt:"paytm"
    }
]

const socialIconsList=[
  {
    id:1,
    link:"www.google.com",
    icon:<FaFacebook fontSize={"20px"}/>
  },
  {
    id:2,
    link:"www.google.com",
    icon:<FaTwitter fontSize={"20px"}/>
  },
  {
    id:3,
    link:"www.google.com",
    icon:<FaInstagram fontSize={"20px"}/>
  }
]


const Footer=()=>{

  const isDark = useSelector((state)=>state.billaBookStore.isDark)

                return(
                    <footer className="footer-main-container" style={{backgroundColor:isDark ? '#000000':'#F0F3F2' }}>

<div>
                 
                  <div className="payments-container">
                    <div className='play-store-container'>
                        <h1 className='footer-sub-heading' style={{color:isDark ? '#ffffff':'#5C6C75'}}>Our Payment Partners</h1>
                        
                        <div className='payment-partners-container'>
                            {partnerLogosList.map((partner)=>(
                              
                                    <img key={partner.id} src={partner.src} alt={partner.alt} className="partner-logo"/>
                               
                            ))}
                        </div>
                       
                        </div>
                        <div className='play-store-container'>
                       
                        <div className='payment-partners-container'>
                            
                            <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534522/ShoppingClone/googleplay-btn_g9i3xp.svg" alt="play-store" className="store-img"/>
                            <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534522/ShoppingClone/appstore-btn_edbcsz.svg" alt="app-store" className="store-img"/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div>
                  
              

              <div className="copy-right-container">
              
                  <p className='copy-right-text'>&copy; 2024 Billa Bookstore.      All rights reserved.</p>
             
                    <div className='social-icons-container'>
                      <p className='copy-right-text'>Follow us on</p>
                      {socialIconsList.map((socialIcon)=>(
                        <a key={socialIcon.id} href={socialIcon.link} className='social-icon nav-link'>{socialIcon.icon}</a>))}
                      </div>  
    
                </div>
                </div>
             
           
         
                    </footer>
                )
}


export default Footer