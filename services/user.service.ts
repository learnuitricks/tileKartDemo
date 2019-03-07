import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userAPIURL : string = "http://demo5911200.mockable.io/user";
  constructor(private _httpClient:HttpClient) {
  }

  
  createUser  (user:User):Observable<string>{
    return this._httpClient.post<string>(this.userAPIURL,user,httpOptions);
  }
}