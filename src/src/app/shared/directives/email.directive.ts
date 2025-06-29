import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from "@angular/forms";


@Directive({
    selector: '[emailValidator]',
    providers: [/*Add your code here*/
         {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
    ]
})
export class EmailValidatorDirective implements Validator {
    // Add your code here
      validate(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email && !emailPattern.test(email)) {
      return { invalidEmail: true };
    }
    return null;
  }
}
