import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private navController: NavController) {}

  navigateBack() {
    this.navController.back();
  }

  async navigateForward(url: string | any[], options: any = {}) {
    await this.navController.navigateForward(url, options);
  }

  async navigateBackward(url: string | any[], options: any = {}) {
    await this.navController.navigateBack(url, options);
  }

  async navigateRoot(url: string | any[], options: any = {}) {
    await this.navController.navigateRoot(url, options);
  }
}
