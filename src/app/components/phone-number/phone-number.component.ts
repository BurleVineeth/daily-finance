import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { IonItem, IonInput } from '@ionic/angular/standalone';
import { IntlTelInputDirective } from 'src/app/core/directives/intl-tel-input.directive';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneNumberComponent),
      multi: true,
    },
  ],
  imports: [
    IonInput,
    ReactiveFormsModule,
    CommonModule,
    IonItem,
    IntlTelInputDirective,
    FormsModule,
  ],
  standalone: true,
})
export class PhoneNumberComponent {
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() formControl = new UntypedFormControl();

  phoneNumber = 32989879799;

  constructor() {}

  writeValue(value: string): void {
    // this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  updateErrorForIntTelInput(event: any) {}
}
