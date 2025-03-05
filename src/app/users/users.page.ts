import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonNote,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { USERS } from '../core/interfaces/users.interface';
import { FirebaseService } from '../core/services/firebase.service';
import { COLLECTIONS } from '../core/enums';
import { addIcons } from 'ionicons';
import { caretBack } from 'ionicons/icons';
import { HeaderComponent } from '../components/header/header.component';
import { ModalService } from '../core/services/modal.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonNote,
    IonButtons,
    IonButton,
    IonIcon,
    HeaderComponent,
  ],
})
export class UsersPage {
  usersList!: USERS[];

  constructor(
    private firebaseSvc: FirebaseService,
    private modalSvc: ModalService,
  ) {
    addIcons({ caretBack });
  }

  async ionViewWillEnter() {
    try {
      await this.getUsersList();
    } catch (error) {
      console.error('@Error', error);
    }
  }

  private async getUsersList() {
    try {
      this.usersList = await this.firebaseSvc.getCollectionData<USERS>(
        COLLECTIONS.USERS,
      );
      console.log(this.usersList);
    } catch (error) {
      console.error('@Error', error);
    }
  }

  public async viewProfile(user: USERS) {
    try {
      await this.modalSvc.presentShowImage(
        'https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/comp%2FX0U9p3lbsEnyQ4kqeJJ2%2FfloorPlans%2Fimages%2F1732696404618_iJ3JKWyqa6LX?alt=media&token=3f56d001-a6f5-424e-8bd6-5060c9ff84ad',
        user.name,
      );
    } catch (error) {
      console.error('@Error', error);
    }
  }
}
