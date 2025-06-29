import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.registrationForm.get('name')!;
  }

  get email() {
    return this.registrationForm.get('email')!;
  }

  get password() {
    return this.registrationForm.get('password')!;
  }

  onSubmit() {
    const form = this.registrationForm;

    this.registrationForm.markAllAsTouched;

    if (form.valid) {
      console.log(form.value);
    }

    console.log("Form submitted.");
  }

   passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
