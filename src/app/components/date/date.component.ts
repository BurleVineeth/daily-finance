import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import {
  IonItem,
  IonInput,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true,
    },
  ],
  imports: [IonInput, ReactiveFormsModule, CommonModule, IonItem],
  standalone: true,
})
export class DateComponent {
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() formControl = new UntypedFormControl();

  constructor() {}

  writeValue(value: string): void {
    // this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
