import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
} from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Message</IonLabel>
          <IonTextarea rows={4} />
        </IonItem>

        <IonButton expand="block" style={{ margin: '20px' }}>
          Send Message
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
