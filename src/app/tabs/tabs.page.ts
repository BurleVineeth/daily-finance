import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { time, statsChart, home, personAddOutline } from 'ionicons/icons';
import { ModalService } from '../core/services/modal.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonFab,
    IonFabButton,
  ],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private modalSvc: ModalService) {
    addIcons({ home, time, statsChart, personAddOutline });
  }

  async addNewUser() {
    try {
      await this.modalSvc.presentAddUser();
    } catch (error) {
      console.error('@Error', error);
    }
  }
}
