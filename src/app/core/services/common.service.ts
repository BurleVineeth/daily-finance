import { Injectable } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  public getErrorMsg(
    formControl: UntypedFormControl,
    label: string,
    customError: string = '',
  ) {
    const errors = formControl.errors;
    if (errors && errors['required']) {
      return `${label} is Required`;
    } else if (customError) {
      return `${label} is ${customError}`;
    }
    return '';
  }

  public getColSize(index: number, totalOptions: number) {
    return totalOptions % 2 === 0 ? 6 : index === 0 ? 12 : 6;
  }
}
