"use client"
import React from "react";
import { useState } from "react";
const contact = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const nomRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    const prenomRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    const descriptionRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

    const [state, setState] = useState({
        prenom: '',
        nom: '',
        email: '',
        description:''
       
    })

    const [errors, setErrors] = useState({
        prenom: '',
        nom: '',
        age: '',
        description: '',
      
      })

      function validateField(field, value) {
        switch (field) {
            case 'prenom':
            case 'nom':
            case 'description':
                if (!nomRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `${field} n'est pas valide` }))
                else setErrors(prev => ({ ...prev, [field]: '' }))
                break
            case 'email':
                if (!emailRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `email n'est pas valide` }))
                else setErrors(prev => ({ ...prev, [field]: '' }))
                break
           
            default:
                break
        }
      }
       // Verifier si un champ a une erreur pour l'afficher
 function fieldHasError(field) {
    if (errors[field] && errors[field] !== '') return true
    return false
  }

  function handleChange(event) {
    const { name, value } = event.target
   validateField(name, value)
    setState(previousState => ({ ...previousState, [name]: value }))
  }





    return (
        <div>
          <form className='container-inscription'>
      <h1>Contactez moi</h1>

<div className='form-group'>
<label className='l1'>nom:</label>
<input type='text' placeholder='Saisir votre nom'  name='nom'  className={`in1 ${fieldHasError('nom') && "is-invalid"}`} value={state.nom} onChange={handleChange}></input>
<div className={fieldHasError('nom') ? "invalid-feedback" : "valid-feedback"}>{errors.nom}</div>
  </div>     
    
     <div className='form-group'>
     <label className='l2'>Prenom:</label>
      <input type='text' placeholder='saisi votre prenom' name='prenom'  className={`in2 ${fieldHasError('nom') && "is-invalid"}`} value={state.prenom} onChange={handleChange}></input>
      <div className={fieldHasError('prenom') ? "invalid-feedback" : "valid-feedback"}>{errors.prenom}</div>
     </div>
     <div className='form-group'>
     <label className='l3'>Email:</label>
      <input type='email' placeholder=' saisir votre emial' name='email'  className={`in3 ${fieldHasError('nom') && "is-invalid"}`} value={state.email} onChange={handleChange}></input>
      <div className={fieldHasError('email') ? "invalid-feedback" : "valid-feedback"}>{errors.email}</div>
      </div>
     
      <div className='form-group'>
      <label className='l4'>Description:</label>
      <textarea className={`in4 ${fieldHasError('description') && "is-invalid"}`} placeholder='Vous pouvez ecrire votre text ici' cols="20"></textarea>
      </div>
      <div className='form-group'>
      <button type='submit'>Soumetre</button>
      </div>
      
     
      </form>   
        </div>
    );
}


export default contact