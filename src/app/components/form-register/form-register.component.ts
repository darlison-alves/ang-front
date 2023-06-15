import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user.service.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {

  text_btn = "ENVIAR"
  isLoading = false;

  error = ""
  isSuccess = false

  public applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private userServiceService: UserServiceService) { }

  submitApplication() {
    this.isLoading = true;
    console.log(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.phone ?? ''
    );

    this.userServiceService.save({
      name: this.applyForm.value.name ?? '',
      email: this.applyForm.value.email ?? '',
      phone: this.applyForm.value.phone ?? ''
    }, () => {
      this.isLoading = false;
      this.isSuccess = true;
      this.error = ""
    }, (err) => {
      this.error = err.message
      this.isLoading = false;
      this.isSuccess = false
    })
  }

}
