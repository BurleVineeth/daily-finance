import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { IonItem, IonInput } from '@ionic/angular/standalone';
import { IntlTelInputDirective } from 'src/app/core/directives/intl-tel-input.directive';
import { CommonService } from 'src/app/core/services/common.service';

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
    ReactiveFormsModule,
    CommonModule,
    IntlTelInputDirective,
    FormsModule,
  ],
  standalone: true,
})
export class PhoneNumberComponent {
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() formControl = new UntypedFormControl();
  @Input() isNumberValid = false;

  @Output() isNumberValidChange = new EventEmitter<boolean>();
  phoneNumber = 32989879799;

  constructor(private cmnService: CommonService) {}

  public getErrorMsg() {
    return this.cmnService.getErrorMsg(this.formControl, this.label, 'Invalid');
  }

  updateErrorForIntTelInput(event: { isValid: boolean }) {
    console.log(event);
    this.isNumberValid = event.isValid;
    this.isNumberValidChange.emit(this.isNumberValid);
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
