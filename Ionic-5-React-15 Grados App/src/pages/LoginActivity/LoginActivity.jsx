import React, { useContext, useState } from 'react';
import { IonCheckbox, IonInput, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonButtons, IonMenuButton, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonModal, IonIcon } from '@ionic/react';
import addUsers from '../../data/addUser';
// import ActivitiesContext, { Activity } from '../../data/activities-context';
// import classes from './AllActivities.module.css';
// import CompleteModalActivity from '../../components/CompleteActivityModal';
// import { checkmarkOutline } from 'ionicons/icons';

const LoginActivity = () => {

    // const [activityToComplete, setActivityToComplete] = useState<Activity>();

    // const activitiesCtxt = useContext(ActivitiesContext);

    // const openCompleteModal = (activity: Activity) => {
    //     setActivityToComplete(activity);
    // };

    // const closeModal = () => {
    //     setActivityToComplete(undefined);
    // };
    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const onSubmit = (user, mail, ev) => {
        console.log("check")
        addUsers(user,mail)
        ev.preventDefault();
    
    }

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
                        <IonTitle>LogIn</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <form className="ion-padding" onSubmit={ev => {
                        // ev.target.add1.value
                        
                        console.log(ev)
                        const user = ev.target.add1.value
                        const mail = ev.target.add2.value
                        
                        onSubmit(user, mail, ev);
                        }}>
                        <IonItem>
                            <IonLabel position="floating">Usuario</IonLabel>
                            <IonInput name='add1'/>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Correo</IonLabel>
                            <IonInput name='add2'/>
                        </IonItem>
                        
                        <IonButton routerLink="/all-activities" className="ion-margin-top" type="submit" expand="block">
                            Ingresar
                        </IonButton>
                    </form>
                    {/* <IonGrid>
                        { activitiesCtxt.activities.map(activity => (
                        <IonRow key={activity.id}>
                            <IonCol className="ion-text-center">
                                <IonCard>
                                    <img src={activity.imageUrl} alt="Activity"/>
                                    <IonCardHeader>
                                        <IonCardSubtitle>$$$</IonCardSubtitle>
                                        <IonCardTitle>{activity.title}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <p>{activity.description}</p>
                                        <IonItem lines="none">
                                            { !activity.isCompleted ?
                                            <IonButton
                                                className={classes.CenterElement}
                                                fill="clear"
                                                onClick={() => openCompleteModal(activity)}>
                                                Añadir a carrito
                                            </IonButton>
                                            :
                                            <IonIcon color="success" className={classes.CenterElement} icon={checkmarkOutline} />
                                            }
                                        </IonItem>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                        ))
                        }
                    </IonGrid> */}
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default LoginActivity;