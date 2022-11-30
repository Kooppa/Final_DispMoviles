import React from 'react'
import { IonCheckbox, IonInput, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonButtons, IonMenuButton, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonModal, IonIcon } from '@ionic/react';
import { useState, useEffect } from 'react';
import delCar from '../../data/delCar';
export const DatosCar = ({value}) => {
  
    function del() {
      let id = value.id
      console.log(id)
      delCar(id);
      window.location.reload(false);
    }


  return (
    <>
    <IonRow class='bod'>
      <IonCol>{value.id}</IonCol>
      <IonCol>{value.name}</IonCol>
      <IonCol>${value.directory}</IonCol>
      <IonCol><button onClick={del} >Delete</button></IonCol>
      </IonRow>
    </>
    


      
      
  )
}
export default DatosCar