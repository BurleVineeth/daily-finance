import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, OnChanges } from '@angular/core';
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
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { SELECT_OPTIONS } from 'src/app/core/interfaces';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectDropdownComponent),
      multi: true,
    },
  ],
  imports: [
    IonInput,
    ReactiveFormsModule,
    CommonModule,
    IonItem,
    IonSelect,
    IonSelectOption,
  ],
  standalone: true,
})
export class SelectDropdownComponent implements OnChanges {
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() options: SELECT_OPTIONS[] = [];
  @Input() formControl = new UntypedFormControl();

  constructor() {}

  ngOnChanges() {
    console.log(this.options);
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
