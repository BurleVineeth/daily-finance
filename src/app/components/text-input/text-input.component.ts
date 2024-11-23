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
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
  imports: [IonInput, ReactiveFormsModule, CommonModule, IonItem],
  standalone: true,
})
export class TextInputComponent {
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() formControl = new UntypedFormControl();

  constructor() {}

  public getErrorMsg() {
    const errors = this.formControl.errors;
    if (errors && errors['required']) {
      return `${this.label} is Required`;
    }
    return '';
  }

  writeValue(value: string): void {
    // this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
