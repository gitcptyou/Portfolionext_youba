import React from "react";
const competence = () => {
    return (
        <div>
            <div> <h1>competence technique:</h1>
   <ol>
    <fieldset>
      <legend>Les langage de programation:</legend>
   
    <table>
      <td>
      <tr><label for="java" style={{margin:"0px"}}> Maitrise parfaite du langage java sur
         plusieurs framework(Netbens,eclipse,intilij,springboots)  </label></tr>
         <tr style={{textAlign:"left"}}> <label for="c" style={{margin:"0px", padding:"0px", textAlign:"left"}}>Maitrise parfaite du langage C# </label>  </tr>
      <tr style={{textAlign:"left"}}> <label for="js"> Maitrise parfaite du langage javascript</label></tr>
      <tr style={{textAlign:"left"}}> <label for="hltcs">Maitrise parfaite du langage de balisage HTML, et de style CSS </label>    </tr>
      
      </td>
      <td>
      <tr>  <progress id='java'max="100" value="90" style={{backgroundColor:"orange"}}></progress> </tr>
        <tr>  <progress id='c' max="100" value="75" style={{backgroundColor:"orange"}}></progress>  </tr>
        <tr>  <progress id='js' max="100" value="70" style={{backgroundColor:"orange"}}></progress> </tr>
        <tr> <progress id='htcs' max="100" value="85" style={{backgroundColor:"orange"}}></progress></tr>
      </td>
      <td>
        <tr>90%</tr>
        <tr>75%</tr>
        <tr>70%</tr>
        <tr>85%</tr>
      </td>
      </table>

     
      
    
    
     
    </fieldset>
   
     
    <fieldset>
      <legend>Les bases de donnees:</legend>
    
    <table> 
     <td>
      <tr style={{textAlign:"left"}}><label for="mysql">Maitrise parfaite du SGBD mysql et sql server</label></tr>
      <tr style={{textAlign:"left"}}> <label for="cassandra">Maitrise parfaite du SGBD cassandra</label></tr>
      <tr style={{textAlign:"left"}}><label for="mongo">Maitrise parfaite du SGBD Mongo db</label> </tr>
     </td>
     <td>
      <tr><progress id='mysql' max="100" value="90" style={{backgroundColor:"red"}}></progress></tr>
      <tr><progress id='cassandra' max="100" value="90" style={{backgroundColor:"red"}}></progress ></tr>
      <tr><progress id='mongo' max="100" value="90"style={{backgroundColor:"red"}}></progress></tr>
     </td>
     <td>
      <tr>90%</tr>
      <tr>90%</tr>
      <tr>90%</tr>
     </td>

    </table>

    </fieldset>
    
  <fieldset>
    <legend>Analyse et modelisation:</legend>
  
    <table> 
      <td>
        <tr style={{textAlign:"left"}}><label for="uml">Maitrise de  l'UML</label></tr>
        <tr style={{textAlign:"left"}}><label for="mersise">Maitrise de merise pour les data</label></tr>
      </td>
      <td>
        <tr><progress id='uml' max="100" value="90" style={{backgroundColor:"gray"}}></progress></tr>
        <tr><progress id='mersise' max='100' value='90'style={{backgroundColor:"gray"}}></progress></tr>
      </td>
      <td>
        <tr>90%</tr>
        <tr>90%</tr>
      </td>
    </table>
  </fieldset>
   
    <li style={{listStyle:"none"}}>Plaisir</li>
    <table>
      <td>
        <tr style={{textAlign:"left"}}><label>Football</label></tr>
        <tr style={{textAlign:"left"}}> <label>Promenade</label></tr>
        <tr style={{textAlign:"left"}}><label>Voyages</label></tr>
      </td>
      <td>
        <tr><progress max="100" value="90" style={{backgroundColor:"red"}}></progress></tr>
        <tr><progress max="100" value="100" style={{backgroundColor:"red"}}></progress></tr>
        <tr> <progress max="100" value="100" style={{backgroundColor:"green"}}></progress></tr>
      </td>
      <td>
        <tr>90%</tr>
        <tr>100%</tr>
        <tr>100%</tr>
      </td>
    </table>
   
   </ol>
     </div>

        </div>
    );
}

export default competence;