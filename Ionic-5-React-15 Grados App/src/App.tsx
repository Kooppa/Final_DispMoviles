import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenuToggle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllActivities from './pages/AllActivities/AllActivities';
import AddActivity from './pages/AddActivity/AddActivity';
import LoginActivity from './pages/LoginActivity/LoginActivity';
import TableActivity from './pages/TableActivity/TableActivity';
import CarActivity from './pages/CarActivity/CarActivity';
import { cartOutline, clipboardOutline, atOutline, addCircleOutline, beerOutline } from 'ionicons/icons';

import ActivitiesContextProvider from './data/ActivitiesContextProvider';

import PropTypes from 'prop-types'; // ES6
import Lottie from 'react-lottie';
import animationData from './13498-new-year-party.json'

const defaultOptions = {
    loop:true,
    autoplay: true,
    animationData: animationData,
    renderSettings: {
        PreserveAspectRatio: "xMidYMid slice"
    }
};

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonMenu contentId='scheduleAppM1'>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menú desplegable</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonMenuToggle>
                            <IonItem routerLink="/login-activity" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={atOutline}/>
                                <IonLabel>Login</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/all-activities" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={beerOutline}/>
                                <IonLabel>Productos</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/add-activity" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={addCircleOutline}/>
                                <IonLabel>Añadir producto</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/car-activity" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={cartOutline}/>
                                <IonLabel>Carrito</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/table-activity" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={clipboardOutline}/>
                                <IonLabel>Inventario</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <div>
                        <Lottie 
	                        options={defaultOptions}
                        height={400}
                        width={400}
                        />
                    </div>
                    </IonList>
                    
                </IonContent>
            </IonMenu>
            <ActivitiesContextProvider>
                <IonRouterOutlet id="scheduleAppM1">
                    <Route path='/all-activities' component={AllActivities} exact />
                    <Route path='/add-activity' component={AddActivity} exact />
                    <Route path='/login-activity' component={LoginActivity} exact />
                    <Route path='/table-activity' component={TableActivity} exact />
                    <Route path='/car-activity' component={CarActivity} exact />
                    <Redirect to='/all-activities' />
                </IonRouterOutlet>
            </ActivitiesContextProvider>
        </IonReactRouter>
    </IonApp>
);

export default App;
