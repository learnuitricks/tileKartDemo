import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  constructor() { }
  isUserAuthenticated():boolean{
    if(localStorage.getItem("user")!=null && localStorage.getItem("user")!=""){
      return true;
    }
    else
    {
      return false;
    }
  }
}
