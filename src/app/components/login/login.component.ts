import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { HttpService } from '../../../services/api/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [HttpService],
})

export class LoginComponent implements OnInit {
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('s*[a-z0-9-]+[a-z0-9-\.]*[a-z0-9-]+@+([a-z0-9-]+\.)+[a-z0-9-]+\s*$'),
      Validators.maxLength(15)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}')
    ])
  });

  constructor(
    private httpService: HttpService,
    public snackBar: MatSnackBar,
  ) { }

  onSubmit(): void {
    this.httpService
      .postData(this.loginForm.value)
      .subscribe(
        error => console.log(error)
      );
    this.openSnackBar('Login Successfuly!', '');
    this.loginForm.reset();
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  ngOnInit(): void { }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
}
