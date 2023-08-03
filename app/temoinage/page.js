'use client'
import React, {useState} from "react";
import Link from "next/link";
import {useDispatch,useSelector} from "react-redux";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { addOpinion,getOpinion } from "@/store/reducers/opinionReducer";
import store from "@/store";

const Avis = () => {
    
    <Provider store={store}>
        const dispatch=useDispatch();
         const opinions=useSelector(state=state.opinion.opinions)
        <Avis/>
    </Provider>
   
   
    //const router=useRouter();
    
   
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
    
  // dispatch(addOpinion({...state, opinion}))
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
        
        <div className="divhome">
            
          <form className='container-inscription'onSubmit={submit}>
      <h1>Notez moi</h1>

<div className='form-group'>
<label className='label'>nom:</label>
<input type='text' placeholder='Saisir votre nom' required className='in2' name='firstname'   onChange={handleChange}></input>
  </div>     
    
     <div className='form-group'>
     <label className='label'>Prenom:</label>
      <input type='text' placeholder='saisi votre prenom'required className='in2' name="lastname"  onChange={handleChange} ></input>
     </div>
     <div className='form-group'>
     <label className='label'>Email:</label>
      <input type='email' placeholder=' saisir votre emial' required className='in2'name="email" value={opinion.email} onChange={handleChange}></input>
      </div>
     
      <div className='form-group'>
      <label className='label'>Description de l'avis:</label>
      <textarea className='in4' placeholder='Vous pouvez ecrire votre text ici' cols="20" name="description"  value={opinion.description} on onChange={handleChange} ></textarea>
      </div>
      <div className='form-group'>
      <button type='submit' className="btn">Appliquer mon avis</button>
      <Link href='/listdestemoinage' style={{display:"block" , marginLeft:"20%"}}>
        passer vers la page des opinion
      </Link>
      <div style={{marginTop:"7%"}}> 

      </div>
      
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