import React from 'react'
import { IonCheckbox, IonInput, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonButtons, IonMenuButton, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonModal, IonIcon } from '@ionic/react';
import { useState, useEffect } from 'react';
import delItem from '../../data/delItem';

export const DatosItem = ({value}) => {
  
    // const [showFormUp, setShowFormUp] = useState(false);

    // const apperForm = () => {
    //   setShowFormUp(!showFormUp);
    // };

    // function update() {
    //   let id = value.id
    //   let name = namef.value
    //   let directory = directoryf.value
    //   console.log('id:',id,'name:', name,'directory:', directory)
    //   updateItem(id, name, directory);
    //   window.location.reload(false);
    // }

    // function del() {
    //   let id = value.id
    //   console.log(id)
    //   delItem(id);
    //   window.location.reload(false);
    // }
    function del() {
      let id = value.id
      console.log(id)
      delItem(id);
      window.location.reload(false);
    }


  return (
    <>
    <IonRow class='bod'>
      <IonCol>{value.id}</IonCol>
      <IonCol>{value.name}</IonCol>
      <IonCol>${value.directory}</IonCol>
      <IonCol><button onClick={del} >Delete</button></IonCol>
    
    
    {/* {showFormUp && (
          <tr>
            <th scope="row">{value.id}</th>
            <td><input autoComplete='off' id="namef" name="namef" type="text" /></td>
            <td><input autoComplete='off' id="directoryf" name="directoryf" type="number" /></td>
            <td><button 
                onClick={update} 
                >Send</button></td>
      
          </tr>
           )} */}
      </IonRow>
    </>
    


      
      
  )
}
export default DatosItem
