import { CanActivate } from "@angular/router";
import { AutheticationService } from "./authetication-guard.service";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private autheticationSerive:AutheticationService) {
    }
    canActivate():boolean{
       return this.autheticationSerive.isUserAuthenticated();
    }
}
