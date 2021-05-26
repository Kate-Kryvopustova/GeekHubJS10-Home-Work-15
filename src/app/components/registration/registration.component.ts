import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  hide = true;

  registrationForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('s*[a-z0-9-]+[a-z0-9-\.]*[a-z0-9-]+@+([a-z0-9-]+\.)+[a-z0-9-]+\s*$'),
      Validators.maxLength(15)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}')
    ]),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  get email(): AbstractControl {
    return this.registrationForm.get('email');
  }

  get password(): AbstractControl {
    return this.registrationForm.get('password');
  }

  get name(): AbstractControl {
    return this.registrationForm.get('name');
  }

  get surname(): AbstractControl {
    return this.registrationForm.get('surname');
  }

  get phone(): AbstractControl {
    return this.registrationForm.get('phone');
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
}
