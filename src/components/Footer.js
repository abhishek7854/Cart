import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    const array = ["About Us","Career","Press Releases","Gift a Smile"];
    const array2 = ["Facebook","Twitter","Instagram"];
    const array3 = ["Become an Affiliate","Advertise Your Product","Fulfilment by R-Creator"];
    const array4 = ["Your Account","Returns Centre","100% Purchase Protection","Help"];
    const footerDetail = {
        heading1 : "Get to Know Us",
        heading2 : "Connect with Us",
        heading3 : "Make Money with Us",
        heading4 : "Let Us Help You"
    }
    const footercopyright = [
         "Conditions of Use & Sale",
         "Privacy Notice",
         "Interest-Based Ads",
         "© 1996-2022, Amazon.com, Inc. or its affiliates"
    ]

    // const Footer_Contebt=()=>{
    //     return (
    //     <div>
    //     <h3>{footerDetail.heading1}</h3>
    //     {array.map((item,index)=><p>{item}</p>)}
    //     </div>
    // )}
  
    return (
    <div>
        <div className='footer-contain'>
            <div className='footer-content'>
            <h3>{footerDetail.heading1}</h3>
            {array.map((item,index)=><p>{item}</p>)}
            </div>
            <div className='footer-content'>
            <h3>{footerDetail.heading2}</h3>
            {array2.map((item,index)=><p>{item}</p>)}
            </div>
            <div className='footer-content'>
            <h3>{footerDetail.heading3}</h3>
            {array3.map((item,index)=><p>{item}</p>)}
            </div>
            <div className='footer-content'>
            <h3>{footerDetail.heading4}</h3>
            {array4.map((item,index)=><p>{item}</p>)}
            </div>
        </div>
        <div className='footer-containRights'>
        {footercopyright && footercopyright.map((item)=><Link style={{ textDecoration: 'none', color:'white' }}><p>{item}</p></Link>)}
        </div>
    </div>
    
  )
}

export default Footer;