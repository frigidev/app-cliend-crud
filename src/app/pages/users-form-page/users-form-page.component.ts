import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RandomString } from '../../services/random-string/random-string.service';
import { Users } from '../../model/users/users';
import { UsersService } from '../../services/users/users.service';
import { createValidateCpf, createPasswordStrength } from '../../validators';

@Component({
  selector: 'app-form',
  templateUrl: './users-form-page.component.html',
  styleUrls: ['./users-form-page.component.css']
})
export class UsersFormPageComponent {
  
  hide = true;

  errorMessageEmail = "Enter a valid email";
  errorMessageName = "Must begin with an uppercase letter, and it should contain only letters and between 4-30 characters";   
  errorMessagePassword = "Your password must contain between 6 or 20 characters, a lowercase letter, an uppercase letter, numbers and at least one symbol";
  errorMessageCPF = "Enter a valid CPF";

  id: string = this.randomString.generateRandomId();

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private randomString: RandomString
  ){}

  formGroup = this.formBuilder.group({
    id: [this.id],
    name: ['', Validators.compose([Validators.pattern(/^[A-Z][A-Za-z(\s)?]{3,30}$/), Validators.required])],
    email: ['', Validators.compose([Validators.pattern(/^([\w].+)@([\w]{2,15}).([\w]{2,10})$/), Validators.required])],
    password: ['', Validators.compose([createPasswordStrength(), Validators.required])],
    cpf: ['', Validators.compose([createValidateCpf(), Validators.required])]
  })

  save(){
    if(this.formGroup.valid){
      this.usersService.postUser(this.formToValue(this.formGroup));
      this.router.navigate(['/home']);
    }else{
      const error = document.getElementById('invalidForm');
      error!.innerText = "You can't submit an invalid form";
    }
  }

  formToValue(form: typeof this.formGroup): Users {
    return {
      id: form.value.id!,
      name: form.value.name!,
      email: form.value.email!,
      password: form.value.password!,
      cpf: form.value.cpf!
    }
  }

  error(control: 'id' |  'name' | 'email' | 'cpf' | 'password', validator: string){
    return this.formGroup.controls[control].getError(validator) ? true : false;
  }
}
