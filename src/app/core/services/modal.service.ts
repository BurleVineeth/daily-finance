import { Injectable } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular/standalone';
import { TooltipPopoverComponent } from 'src/app/components/tooltip-popover/tooltip-popover.component';
import { AddUserComponent } from 'src/app/modals/add-user/add-user.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private modalCtrl: ModalController,
    private popoverController: PopoverController,
  ) {}

  async presentAddUser() {
    try {
      const modal = await this.modalCtrl.create({
        component: AddUserComponent,
        componentProps: {},
      });
      modal.present();

      const modalData = await modal.onDidDismiss();
      console.log(modalData);
    } catch (error) {
      throw error;
    }
  }

  async presentTooltip(event: Event, tooltipTexts: string[]) {
    const popover = await this.popoverController.create({
      component: TooltipPopoverComponent,
      mode: 'ios',
      side: 'right',
      alignment: 'center',
      showBackdrop: true,
      dismissOnSelect: true,
      backdropDismiss: true,
      cssClass: 'tooltip-popover',
      componentProps: { tooltipTexts },
      event,
    });
    await popover.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
