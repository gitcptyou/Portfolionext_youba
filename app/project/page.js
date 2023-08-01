import React from "react";
import Image from "next/image";
import imglocation from '@/images/location.png'
import imagecomplexe from '@/images/complexe.png'
const projet = () => {
    return (
        <div>
            <section><h1>Projet</h1>
    <p>Les projets que j'ai réalisés pendant ma formation académique et professionnelle.</p> 
    </section>
   <div style={{borderTop:"solid", borderBottom:"solid", borderColor:"red"}}>       

<h2>Création d'une application de bureau dédiée à la gestion d'une agence de location de voitures.</h2>
    <fieldset> 
     <legend>Description:</legend>
      
        <div>Un logiciele developper a base du langage java et mysql pour les donnees,permet de gerer une agence de location de voiture.Les pricipales 
   fonctionalites sont:
          <ul style={{listStyle:"outside", float:'left'}}>
            <li>Gestion des vehicule</li>
            <li>Gestion des clients</li>
            <li>Gestion facture  </li>
            <li>Gestion des reclamations</li>
          </ul>  </div> 
          <Image src={imglocation} alt='Image de presentation' style={{height:"300px",width:"600px", float:"right", marginTop:"10px"}}/>        
          </fieldset>
  
      
      <div>
     
   </div>
    </div>
    
      <div style={{borderBottom:"solid", borderColor:"red"}}>  
        <h2>Realisation d'une platforme de gestion d'un complexe sportif</h2>
        <fieldset>
        <legend> description:</legend>
          <div>Une platforme web qui permet de gerer un compleexe sportif,les technologie utilise sont node js et sql server. Les principales fonctionalitees sont:</div>
            
            <ul style={{listStylePosition:"outside",float:"left",}}>
              <li>Gestion des sports</li>
              <li>Gestion des abonnees  </li>
              <li>Gestion des terrains </li>
            </ul>
          
          <Image src={imagecomplexe}alt='Page acceuil' style={{height:"300px", width:"600px", marginTop:"10px",float:"right"}}/>
       
        </fieldset>
       
      
      </div>
      <div style={{borderBottom:"solid", borderColor:"red"}}>
        <h2>Realisation d'une application de gestion d'une ecole</h2>
        <fieldset>
         <legend>description: </legend> 
          <div>une application de suivi d'une ecole developer en C#.
            les pricipale fonctionalites:
            <ul style={{float:"left"}}>
              <li>Gestion des etudiants</li>
              <li>Gestion des cours</li>
              <li>Gestion des notes</li>
            </ul>
            </div> 
        
        </fieldset>

       
       
      </div>
      <div>

      </div>
      <div>

      </div>
        </div>
    );
}

export default projet;