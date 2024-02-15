import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup;
  mobileAlertVisible: boolean = false;
  passwordMismatch: boolean = false; // Flag to track password mismatch

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      name: ['', [Validators.required, this.nameValidator]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    this.signupform.get('name')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
      this.signupform.get('name')?.updateValueAndValidity();
    });

    this.signupform.get('mobile')?.valueChanges.subscribe(value => {
      if (!/^\d*$/.test(value)) {
        this.mobileAlertVisible = true;
      } else {
        this.mobileAlertVisible = false;
      }
    });
  }

  nameValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (control.value && !nameRegex.test(control.value)) {
      return { 'invalidName': true };
    }
    return null;
  }

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      this.passwordMismatch = true;
      return { 'passwordMismatch': true };
    } else {
      this.passwordMismatch = false;
      return null;
    }
  }

  signup() {
    // Check if passwords match
    if (this.signupform.get('password')?.value !== this.signupform.get('confirmPassword')?.value) {
      this.passwordMismatch = true;
      return;
    }

    // Proceed with signup logic if passwords match
    this.http.post<any>("http://localhost:3000/signup", this.signupform.value).subscribe(res => {
      alert("Student registered successfully");
      this.signupform.reset();
      this.router.navigate(['login']);
    }, err => {
      alert("Something went wrong");
    });
  }
}
