import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private readonly _URL_BASE = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  public save( user: IUser, cb_success = (payload: any) => { }, cb_error = (payload: any) => { }) {
    this.httpClient.post(`${this._URL_BASE}/users`, user)
    .subscribe({
      next(value) {
        console.log('value', value);
        cb_success(value)
      },
      error(err) {
        console.log('err', err);
        cb_error(err)
      },
    })
  }
}
