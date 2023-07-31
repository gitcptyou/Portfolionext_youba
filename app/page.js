import Image from 'next/image'
import styles from './page.module.css'
import photopricipal from'../images/photoprincipale.jpg'
import Imagedev from '../images/Image dev.jpg'
import imagedev2 from '../images/image dev2.jpg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       
        </div>

      <div className={styles.center} style={{paddingTop:"1 cm", backgroundColor:"darkgrey"}}>
      <fieldset>
   <legend className='titlehome'> présentation: </legend>
   <div className='phdiv'>
   <Image src={photopricipal} alt='Ma photo' className='ph' style={{border:"#ccc solid", borderRadius:"30 px", width:"160px", height:"250px", display:"inline", float:'left'}}/>
   </div>
   <h1 style={{marginLeft:"50%"}}>Amghar Youba</h1>
   <div>
   <h2 style={{marginLeft:"50%"}}> développeur full stuck</h2>
   <object data="./images/CV youba.pdf" type="application/pdf"  >
        <p> <a href="./images/CV youba.pdf" download>télécharger le cv ici</a>.</p>
    </object>
   <p> Salut, je suis Amghar Youba nee Le 3 mai 1998 en algerie.
    Je suis un developeur informatique full stuck.J'ai choisi de faire de ma passion mon métier,
    je crée des  application web,mobile et descktop avec un design uniques qui reflètent ma créativité.
    Entrez dans mon univers frais et pétillant, où chaque projet raconte une histoire unique et inspirante.
   </p>
   </div>
  
   </fieldset>
  
   
      </div>
      <div style={{display:"flex"}}>
   <Image src={Imagedev} alt='imagedeveloppeur'style={{height:"150px",marginLeft:"50px",marginTop:"20px", float:"right"}}/>
    <Image src={imagedev2} alt='imagedeveloppeur'style={{ height:"150px",marginTop:"20px", float:"right"}}/>
   </div>
     

      <div>
      </div>
    </main>
  )
}
