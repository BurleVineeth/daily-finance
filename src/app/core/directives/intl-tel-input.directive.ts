import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  AfterViewInit,
} from '@angular/core';
import * as IonTelInput from 'intl-tel-input';

export interface IntlTelInputDirectiveData {
  isValid: boolean;
  number: string;
  countryCode: object;
}

@Directive({
  selector: '[appIntlTelInput]',
  standalone: true,
})
export class IntlTelInputDirective implements AfterViewInit {
  private ionIntelInputRef!: IonTelInput.Plugin;
  private INTL_TEL_INPUT_SCRIPT =
    'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js';

  @Output() isValidNumber = new EventEmitter<IntlTelInputDirectiveData>();
  @Input() countryCode: any = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.ionIntelInputRef = IonTelInput(this.el.nativeElement, {
      preferredCountries: ['in'],
      separateDialCode: true,
      utilsScript: this.INTL_TEL_INPUT_SCRIPT,
    });
    if (this.countryCode) {
      this.ionIntelInputRef.setCountry(this.countryCode);
    }
  }

  @HostListener('input', ['$event'])
  onInput(): void {
    this.checkValidNumberAndEmit();
  }

  @HostListener('countrychange', ['$event'])
  onCountryChange(): void {
    this.checkValidNumberAndEmit();
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    const charCode = event.which || event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  checkValidNumberAndEmit() {
    const isValid = (
      this.ionIntelInputRef as unknown as any
    ).isPossibleNumber();
    this.isValidNumber.emit({
      isValid,
      number: this.ionIntelInputRef.getNumber(),
      countryCode: this.ionIntelInputRef.getSelectedCountryData(),
    });
  }
}
