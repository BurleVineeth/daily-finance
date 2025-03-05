import { Component, Input, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { caretBack } from 'ionicons/icons';
import { RoutingService } from 'src/app/core/services/routing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() hasNav: boolean = true;
  @Input() showDate: boolean = false;

  today = new Date();

  constructor(private routingSvc: RoutingService) {
    addIcons({ caretBack });
  }

  navBack() {
    this.routingSvc.navigateBack();
  }
}
