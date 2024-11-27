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
import { COLLECTIONS } from 'src/app/core/enums';
import { SELECT_OPTIONS } from 'src/app/core/interfaces';
import { DataMappingService } from 'src/app/core/services/data-mapping.service';
import { FirebaseService } from 'src/app/core/services/firebase.service';
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
    amount: [null, [Validators.required, Validators.min(0)]],
    date: ['', [Validators.required]],
    paymentMode: ['', [Validators.required]],
  });

  isPhoneNumberValid!: boolean;
  paymentOptions!: SELECT_OPTIONS[];

  constructor(
    private modalSvc: ModalService,
    private formBuilder: FormBuilder,
    private dataMapping: DataMappingService,
    private firebaseSvc: FirebaseService,
  ) {
    addIcons({ close });
  }

  ionViewWillEnter() {
    this.isPhoneNumberValid = false;
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
      if (this.userForm.valid && this.isPhoneNumberValid) {
        debugger;
        const userPayload = {
          ...this.userForm.value,
          created: new Date().getTime(),
        };

        await this.firebaseSvc.createSingleDocument(
          COLLECTIONS.USERS,
          userPayload,
        );
      }
    } catch (error) {
      console.error('@Error', error);
    }
  }

  ionViewDidLeave() {
    this.userForm.reset();
  }
}
