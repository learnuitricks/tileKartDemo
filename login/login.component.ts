import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;
  users:string[] = ["john","kevin","david"];

  constructor(private _routerService:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.userName == null || this.userName == ""){
      console.log("user is name is required");
    }
    else if(!this.users.includes(this.userName)){
      console.log(`user ${this.userName} is not a registered user`);
    }
    localStorage.setItem("user",this.userName);    
    this._routerService.navigate(['/tiles']);
  }

}
