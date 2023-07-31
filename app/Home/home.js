import React from "react";
import imagedev from "./images/Image dev.jpg"
import imagedev2 from './images/image dev2.jpg'
import cv from './images/CV youba.pdf'
import photopricipal from './images/Photoprincipale.jpg'
const home = () => {
    return (
        <div>
         <div className='divhome'>
      <fieldset>
   <legend className='titlehome'> présentation: </legend>
   <div className='phdiv'>
    <Image src={photopricipal} alt='Ma photo' className='ph'/>
   </div>
   <h1>Amghar Youba</h1>
   <div>
   <h2> développeur full stuck</h2>
   <a href={cv} target='_blank'>Telecharger le cv</a>
   <p> Salut, je suis Amghar Youba nee Le 3 mai 1998 en algerie.
    Je suis un developeur informatique full stuck.J'ai choisi de faire de ma passion mon métier,
    je crée des  application web,mobile et descktop avec un design uniques qui reflètent ma créativité.
    Entrez dans mon univers frais et pétillant, où chaque projet raconte une histoire unique et inspirante.
   </p>
   </div>
  
   </fieldset>
   <div>
   <Image src={imagedev} alt='imagedeveloppeur'style={{float:"left",height:"150px",marginLeft:"50px",marginTop:"20px"}}/>
    <Image src={imagedev2} alt='imagedeveloppeur'style={{ height:"150px",marginTop:"20px"}}/>
   </div>
   
    </div>
    <div>
      <div>

      </div>
    </div>
    <div style={{height:"30px"}}>

    </div>
    
   
   
    
  
        
        </div>
    );
}

export default home;