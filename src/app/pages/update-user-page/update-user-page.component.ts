import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../model/users/users';
import { UsersService } from '../../services/users/users.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-update-user-page',
  templateUrl: './update-user-page.component.html',
  styleUrls: ['./update-user-page.component.css']
})

export class UpdateUserPageComponent implements OnInit {

  errorMessageEmail = "Enter a valid email";
  errorMessageName = "Must begin with an uppercase letter, and it should contain only letters and between 4-30 characters";   
  errorMessageCPF = "Enter a valid CPF";

  CPF!: string;

  ngOnInit(): void {
    this.usersService.getUsers()
    .pipe(
      map(users => users.find(user => user.id === this.id)),
      tap(user => this.CPF = user!.cpf)
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
    name: ['', Validators.pattern(/^[A-Z][A-Za-z(\s)?]{3,30}$/)],
    email: ['', Validators.pattern(/^([\w].+)@([\w]{2,15}).([\w]{2,10})$/)],
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
      cpf: form.value.cpf!
    }
  }

  error(control: 'id' |  'name' | 'email', validator: string){
    return this.formGroup.controls[control].getError(validator) ? true : false;
  }

  goBack(): void {
    this.location.back();
  }
}
