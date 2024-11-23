import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonFooter,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { DateComponent } from 'src/app/components/date/date.component';
import { NumberInputComponent } from 'src/app/components/number-input/number-input.component';
import { PhoneNumberComponent } from 'src/app/components/phone-number/phone-number.component';
import { SelectDropdownComponent } from 'src/app/components/select-dropdown/select-dropdown.component';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';
import { SELECT_OPTIONS } from 'src/app/core/interfaces';
import { DataMappingService } from 'src/app/core/services/data-mapping.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    IonButtons,
    IonButton,
    IonIcon,
    IonFooter,
    TextInputComponent,
    ReactiveFormsModule,
    PhoneNumberComponent,
    NumberInputComponent,
    DateComponent,
    SelectDropdownComponent,
    ButtonComponent,
  ],
})
export class AddUserComponent {
  userForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    amount: ['', [Validators.required, Validators.min(0)]],
    date: ['', [Validators.required]],
    paymentMode: ['', [Validators.required]],
  });

  paymentOptions!: SELECT_OPTIONS[];

  constructor(
    private modalSvc: ModalService,
    private formBuilder: FormBuilder,
    private dataMapping: DataMappingService,
  ) {
    addIcons({ close });
  }

  ionViewWillEnter() {
    this.paymentOptions = this.dataMapping.paymentOptions;
  }

  public dismiss() {
    this.modalSvc.dismissModal();
  }

  public getFormControl(field: string) {
    return this.userForm?.get(field) as FormControl;
  }

  public async saveUser() {
    try {
      console.log(this.userForm.value);
    } catch (error) {
      console.error('@Error', error);
    }
  }

  ionViewDidLeave() {
    this.userForm.reset();
  }
}