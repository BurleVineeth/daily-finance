import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Component, Input, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { informationCircleOutline, walletOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, CommonModule],
})
export class ShowImageComponent implements OnInit {
  @Input() imageUrl!: string;
  @Input() title!: string;
  constructor() {
    addIcons({ walletOutline, informationCircleOutline });
  }

  ngOnInit() {}

  public checkWalletInfo() {}

  public checkUserInfo() {}
}
