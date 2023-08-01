'use client'
import React, {useState, useEffect} from "react";

const Avis = () => {

   
    const [state, setState]= useState({
     firstName: '',
     lastName: '',
     email: '',
     description: ''
    })//valeur de chaque champs
    const [opinion, setopinion]=useState([]);
    function handleChange(event) {
     const { name, value } = event.target
   
     
     setState(previousState => ({ ...previousState, [name]: value }))
   }
   function submit(event) {
    event.preventDefault() // Eviter le rafraichissement de la page ( eviter la soumission)
    setopinion(previousopinion => [...previousopinion, { ...state, id: previousopinion.length + 1 }])
    setState(prev => ({
        ...prev,
        nom: '',
        prenom: '',
        email: '',
        description: ''
       
    }))  // Reinitialiser la forme apres la soumission
  } 

    return (
        <div>
          <form className='container-inscription'onSubmit={submit}>
      <h1>Notez moi</h1>

<div className='form-group'>
<label className='l1'>nom:</label>
<input type='text' placeholder='Saisir votre nom' required className='in1' name='firstname'   onChange={handleChange}></input>
  </div>     
    
     <div className='form-group'>
     <label className='l2'>Prenom:</label>
      <input type='text' placeholder='saisi votre prenom'required className='in2' name="lastname"  onChange={handleChange} ></input>
     </div>
     <div className='form-group'>
     <label className='l3'>Email:</label>
      <input type='email' placeholder=' saisir votre emial' required className='in3'name="email" value={opinion.email} onChange={handleChange}></input>
      </div>
     
      <div className='form-group'>
      <label className='l4'>Description de l'avis:</label>
      <textarea className='in4' placeholder='Vous pouvez ecrire votre text ici' cols="20" name="description"  value={opinion.description} on onChange={handleChange} ></textarea>
      </div>
      <div className='form-group'>
      <button type='submit'>Appliquer mon avis</button>
      </div>
     
      </form>
      <>
            {opinion.length ? (
                <>
                    <h1>Liste des utilisateurs ajoutes</h1>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>nom</td>
                                <td>prenom</td>
                                <td>Email</td>
                                <td>description</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {opinion.map(Avis => <tr key={Avis.id}>
                                <td>{Avis.id}</td>
                                <td>{Avis.prenom}</td>
                                <td>{Avis.nom}</td>
                                <td>{Avis.email}</td>
                                <td>{Avis.description}</td>
                                <td><button className='btn btn-primary' >Editer</button> <button className='btn btn-danger' >Supprimer</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </>):''}


      </>  
        </div>
    );
}

export default Avis;