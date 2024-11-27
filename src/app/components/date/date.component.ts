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
import { CommonService } from 'src/app/core/services/common.service';

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

  constructor(private cmnService: CommonService) {}

  public getErrorMsg() {
    return this.cmnService.getErrorMsg(this.formControl, this.label);
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
