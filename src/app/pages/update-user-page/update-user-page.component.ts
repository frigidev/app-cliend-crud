import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../model/users/users';
import { UsersService } from '../../services/users/users.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-update-user-page',
  templateUrl: './update-user-page.component.html',
  styleUrls: ['./update-user-page.component.css']
})

export class UpdateUserPageComponent implements OnInit {

  hide = true;

  errorMessageEmail = "Enter a valid email";
  errorMessageName = "Must begin with an uppercase letter, and it should contain only letters and between 4-30 characters";   
  errorMessagePassword = "Your password must contain 8 or more characters a lowercase letter, an uppercase letter, numbers and at least one symbol";

  CPF!: string;

  ngOnInit(): void {
    this.usersService.getUsersForUpdate()
    .pipe(
      map(users => users.find(user => user.id === this.id)),
      map(user => this.CPF = user!.cpf)
    ).subscribe(_ => this.formGroup.controls['cpf'].setValue(this.CPF))
  }

  id = this.activeRoute.snapshot.paramMap.get('id');

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private activeRoute: ActivatedRoute,
    private location: Location
  ){}

  formGroup = this.formBuilder.group({
    id: [''],
    name: ['', Validators.compose([Validators.pattern(/^[A-Z][A-Za-z(\s)?]{3,30}$/), Validators.required])],
    email: ['', Validators.compose([Validators.pattern(/^([\w].+)@([\w]{2,15}).([\w]{2,10})$/), Validators.required])],
    password: [''],
    cpf: ['']
  })

  save(){
    if(this.formGroup.valid){
      this.usersService.putUser(this.formToValue(this.formGroup), this.id!);
      this.goBack();
    }else{
      const error = document.getElementById('invalidForm');
      error!.innerText = "You can't update an invalid form";
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

  error(control: 'id' |  'name' | 'email' | 'password', validator: string){
    return this.formGroup.controls[control].getError(validator) ? true : false;
  }

  goBack(): void {
    this.location.back();
  }
}
