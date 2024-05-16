import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../model/users/users';
import { UsersService } from '../../services/users/users.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-list-users-page',
  templateUrl: './list-users-page.component.html',
  styleUrls: ['./list-users-page.component.css']
})
export class ListUsersPageComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private router: Router
  ){}

  ngOnInit(){
    this.users = this.usersService.getUsers()
  }

  users!: Observable<Users[]>;

  readed: boolean = false;

  usersList: Users[] = [];

  read(){
    this.users
    .subscribe((users => users.forEach(user => this.usersList.push(user))));
    this.readed = true;
  }

  deleteUser(user: Users){
    this.usersService.deleteUser(user);
    this.router.navigate(['/home']);
  }

  updateUser(user: Users){
    this.router.navigate([`form/${user.id}`]);
  }
}
