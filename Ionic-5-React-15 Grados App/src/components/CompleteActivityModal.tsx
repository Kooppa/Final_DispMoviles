import React, { useContext } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonText, IonButton } from '@ionic/react';
import ActivitiesContext, { Activity } from '../data/activities-context';
import addCar from '../data/addCar';

interface CompleteModalActivityProps {
    activity: Activity;
    dismissModal: () => void;
}

const CompleteModalActivity: React.FC<CompleteModalActivityProps> = (props) => {

    const activitiesCtxt = useContext(ActivitiesContext);

    const confirmCompletion = (activityId: string) => {
        activitiesCtxt.completeActivity(activityId);
        props.dismissModal();
    };

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-no-padding'>
                        <IonImg src={props.activity.imageUrl} />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonText>
                            <h2>{props.activity.title}</h2>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center ion-no-padding'>
                        <IonText color='medium'>
                            <p>
                                ¿Agregar al pedido?
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='danger' fill='clear' onClick={props.dismissModal}>
                            Cancelar
                        </IonButton>
                    </IonCol>
                    <IonCol className='ion-text-center'>
                        <IonButton color='primary' fill='clear' onClick=
                            {ev => {
                                confirmCompletion(props.activity.id)
                                addCar(props.activity.title, props.activity.description);
                                }}
                            >
                            Agregar
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CompleteModalActivity;
