import React, { useRef, useContext, useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonButtons,
    IonMenuButton,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonItem,
    IonInput,
    IonButton,
    IonToast,
} from '@ionic/react';
import ActivitiesContext, { ActivityType } from '../../data/activities-context';
import { useHistory } from 'react-router-dom';

const AddActivity: React.FC = () => {

    const history = useHistory();
    const activitiesCtxt = useContext(ActivitiesContext);

    const [toastMsg, setToastMsg] = useState<string>('');

    const titleInput = useRef<HTMLIonInputElement>(null);
    const descriptionInput = useRef<HTMLIonInputElement>(null);
    const activityTypeInput = useRef<HTMLIonSegmentElement>(null);

    const addActivity = () => {
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const activityType = activityTypeInput.current?.value as ActivityType;

        if (title && description && activityType) {
            activitiesCtxt.addActivity(title, description, activityType);
            setToastMsg('The activity has been saved!');
            history.replace('/all-activities');
        }
    };

    return (
        <React.Fragment>

            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={4000} color="medium" onDidDismiss={() => setToastMsg('')}/>

            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Añadir producto</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol className='ion-text-center'>
                                <IonSegment ref={activityTypeInput}>
                                    <IonSegmentButton value='cer'>
                                        <IonLabel>Cerveza</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value='vin'>
                                        <IonLabel>Vinos</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value='car'>
                                        <IonLabel>Carnes</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Nombre del producto
                                    </IonLabel>
                                    <IonInput ref={titleInput} type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Precio
                                    </IonLabel>
                                    <IonInput ref={descriptionInput} type='number'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className='ion-text-center ion-margin-top'>
                                <IonButton expand='block' fill='outline' onClick={addActivity}>
                                    Agregar
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default AddActivity;
