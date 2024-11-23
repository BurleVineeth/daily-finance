import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule, IonButton],
  standalone: true,
})
export class ButtonComponent {
  @Input() btnText: string = '';
  @Output() btnClick = new EventEmitter<boolean>();

  constructor() {}

  click() {
    this.btnClick.emit(true);
  }
}
