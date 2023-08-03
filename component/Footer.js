import React from "react";
import Image from "next/image";
import imagewh from '../images/wh.jpg'
import imagelink from '../images/linked.jpg'

const Footer = () => {
    return (
        <div style={{display:"inline", placeItems:"center", marginLeft:"25%", height:"5px" , backgroundColor:"aqua"}} className="ftr">
            <Image src={imagewh} alt='Mon whatsapp' className='wh' style={{display:"inline"}} width={30} height={30}/>
            (+1) 438-993-5280 
 <a href='https://www.linkedin.com/in/amghar-youba-809822209/'>
  <Image src={imagelink} alt='Mon profil linkedin' className='link' width={30} height={30}/></a>
  <p style={{display:"inline-flex",marginLeft:"30px"}}> Adresse mail: amgharyouba9@gmail.com </p>
  <p style={{display:"inline-flex", marginLeft:"30px"}}><a href='https://github.com/gitcptyou'>Lien vers github </a></p>
  <p style={{marginTop:"2px",display:"grid",placeItems:"center"}}> © 2023 Amghar Youba. Tous droits réservés.   </p>
            
        </div>
    );
}

export default Footer;