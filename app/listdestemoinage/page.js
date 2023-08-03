
"use client"
import React, { useState,useEffect }  from "react";

import Avis from "../temoinage/page";
import axios from "axios";

const list = () => {
   
    const [devi, setdevi] = useState([])
    function getOpinion() {
        axios.get('http://localhost:5000/show')
            .then(res => setdevi(res.data.data))
            .catch(err => console.log('Error', err))
    }
    useEffect(() => {
      getOpinion()
    }, [])
    return (
        <div>
         <h1>Liste des opinions</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nom</td>
                        <td>prenomom</td>
                        <td>email</td>
                        <td>description</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {devi.map(Avis => <tr key={Avis.numero}>
                        <td>{Avis.numero}</td>
                        <td>{Avis.nom}</td>
                        <td>{Avis.prenom}</td>
                        <td>{Avis.email}</td>
                        <td>{Avis.description }</td>
                        <td><button className='btn btn-success' >Editer</button> <button disabled={devi.length < 2}  className='btn btn-danger'>Supprimer</button></td>
                    </tr>)}
                </tbody>
            </table>
            <button  className='btn btn-primary'>Ajouter un Avis</button>
      <div style={{marginBottom:"30%", backgroundColor:"darkslategrey"}} className='divhome'>
        
        
       </div>  
      
    
        </div>
    );
}

export default list;