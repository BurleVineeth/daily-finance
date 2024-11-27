import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, OnChanges } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { IonItem, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { SELECT_OPTIONS } from 'src/app/core/interfaces';
import { CommonService } from 'src/app/core/services/common.service';

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

  constructor(private cmnService: CommonService) {}

  public getErrorMsg() {
    return this.cmnService.getErrorMsg(this.formControl, this.label);
  }

  ngOnChanges() {
    console.log(this.options);
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
