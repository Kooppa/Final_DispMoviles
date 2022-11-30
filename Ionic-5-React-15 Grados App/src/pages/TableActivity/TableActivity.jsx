import React, { useContext, useState, useEffect } from 'react';
import { IonCheckbox, IonInput, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonButtons, IonMenuButton, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonModal, IonIcon } from '@ionic/react';
import fetchItems from '../../data/fetchItems';
import addItem from '../../data/addItem';
import  DatosItem from './DatosItem';
import './main.css';


const TableActivity = () => {

    const [Items, setItems] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const apperForm = () => {
        setShowForm(!showForm);
    };

    const getItem = async() => {
        const data = await fetchItems();
        // console.log(data)
        for (const element of data) {
          setItems(Items => [...Items, element])
        }
      }


    useEffect(() => {
        getItem();
    }, [])

    return (
        <React.Fragment>
            {/* <IonModal isOpen={!!activityToComplete}>
                <CompleteModalActivity activity={activityToComplete as Activity} dismissModal={closeModal}/>
            </IonModal> */}

            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Inventario</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>

                <IonGrid>
                    <IonRow class='hea'>
                        <IonCol>Id</IonCol>
                        <IonCol>Item</IonCol>
                        <IonCol>Precio</IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    {Items.map(us => (
                        <DatosItem
                        key= {us.id}
                        value={us}
                        />
                    ))}
                </IonGrid>
                <br />
                <button onClick={apperForm}>Agregar Item</button>

                {showForm && (
                <form onSubmit={ev => {
                //ev.preventDefault();
                const name = ev.target.add1.value
                const directory = ev.target.add2.value
                
                addItem(name, directory);
                }}>
                <div className="form-group">
                    <h5>Agregar otro item:</h5>
                    <label htmlFor="exampleInputEmail1">Nombre</label>
                    <input name='add1' autoComplete='off' type="text" className="form-control" id="addName" aria-describedby="emailHelp" placeholder="Nombre"/ >
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Precio</label>
                    <input name='add2' autoComplete='off' type="number" className="form-control" id="adddirectory" placeholder="Precio"/>
                </div>
                <button type="submit" className="btn btn-primary" >Agregar</button>
                </form>
                )}
                   
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default TableActivity;