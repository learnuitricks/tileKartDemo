import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms';
import { TileService } from '../services/tile.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser:User
  zipcodePattern:string = '^[1-9][0-9]{5}$'
  registerForm:FormGroup = this.fb.group({
    userName:['',Validators.required],
    email:[''],
    phoneNumber:[''],
    billingAddress:this.fb.group({
      doorNumber:[''],
      city:[''],
      zip:['',Validators.pattern(this.zipcodePattern)]
    })

  })
  saveMessage: string;
  constructor(private fb:FormBuilder,private _userService:UserService) {
    this.registerUser = new User();
   }

  ngOnInit() {
  }

  register(){
    //console.log(this.registerForm.value);
    this.registerUser = this.registerForm.value;
    this._userService.createUser(this.registerUser).subscribe((message)=>{
      this.saveMessage = message["msg"];
    })
    //push this value to back end
    }
  }


