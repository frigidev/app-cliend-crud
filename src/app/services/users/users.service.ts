import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Users } from '../../model/users/users';
import { MessagesService } from '../messages/messages.service';

const URL = "http://localhost:5000/users"
@Injectable({
  providedIn: "root"
})

export class UsersService {

  constructor(
    private http: HttpClient,
    private messages: MessagesService
  ) {}

  // GET Users
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(URL)
    .pipe(
      catchError(this.handleError<Users[]>()),
      tap(_ => this.log("Users requested"))
    );
  }

  // POST Users
  postUser(user: Users) {
    this.http.post(URL, user)
    .pipe(
      catchError(this.handleError<Users>())
    ).subscribe(_ => this.log("User saved"))
  }

  // PUT Users
  putUser(user: Users, id: string) {
    this.http.put(`${URL}/${id}`, user)
    .pipe(
      catchError(this.handleError<Users>())
    ).subscribe(_ => this.log("User updated"));
  }

  // DELETE Users
  deleteUser(user: Users) {
    this.http.delete(URL + "/" + user.id)
    .pipe(
      catchError(this.handleError<Users>()),
    ).subscribe(_ => this.log("User deleted"));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string): string {
    const messageOp = this.messages.message(message)
    return `Operation: ${messageOp}`
  }
}