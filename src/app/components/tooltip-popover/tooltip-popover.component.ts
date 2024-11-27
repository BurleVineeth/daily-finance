import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonContent, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tooltip-popover',
  templateUrl: './tooltip-popover.component.html',
  styleUrls: ['./tooltip-popover.component.scss'],
  imports: [IonContent, IonText, CommonModule],
  standalone: true,
})
export class TooltipPopoverComponent {
  @Input() tooltipTexts: string[] = [];

  constructor() {}
}
