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
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    },
  ],
  imports: [IonInput, ReactiveFormsModule, CommonModule, IonItem],
  standalone: true,
})
export class NumberInputComponent {
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() formControl = new UntypedFormControl();

  constructor(private cmnService: CommonService) {}

  public getErrorMsg() {
    return this.cmnService.getErrorMsg(this.formControl, this.label);
  }

  onInputChange(event: any): void {
    const inputValue = event.target.value;
    if (inputValue) {
      const numericValue = inputValue.replace(/[^0-9]/g, '');
      const formattedValue = this.formatIndianNumbering(numericValue);
      this.formControl.setValue(formattedValue);
    } else {
      this.formControl.setValue('');
    }
  }

  private formatIndianNumbering(value: string): string {
    let result = '';
    const length = value.length;

    if (length <= 3) {
      result = value;
    } else if (length <= 5) {
      result = value.slice(0, length - 3) + ',' + value.slice(length - 3);
    } else {
      const lastThree = value.slice(length - 3);
      const remaining = value.slice(0, length - 3);
      result =
        remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return result;
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
