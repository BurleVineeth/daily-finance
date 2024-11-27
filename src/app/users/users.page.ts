import { Component, OnInit } from '@angular/core';
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
import { star } from 'ionicons/icons';
import { RoutingService } from '../core/services/routing.service';

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
  ],
})
export class UsersPage {
  usersList!: USERS[];

  constructor(
    private firebaseSvc: FirebaseService,
    private routingSvc: RoutingService,
  ) {
    addIcons({ star });
  }

  async ionViewWillEnter() {
    try {
      await this.getUsersList();
    } catch (error) {
      console.error('@Error', error);
    }
  }

  navBack() {
    this.routingSvc.navigateBack();
  }

  async getUsersList() {
    try {
      this.usersList = await this.firebaseSvc.getCollectionData<USERS>(
        COLLECTIONS.USERS,
      );
      console.log(this.usersList);
    } catch (error) {
      console.error('@Error', error);
    }
  }
}
