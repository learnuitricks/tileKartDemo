import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import {mobileComponent} from './mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { StatusPipe } from './status.pipe';
import { TileComponent } from './tile/tile.component';
import { StarComponent } from './star/star.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TileDetailComponent } from './tile-detail/tile-detail.component';
import { RegisterComponent } from './register/register.component';
import {AuthenticationGuard} from './services/authentication-guard';
import { AutheticationService } from './services/authetication-guard.service';
const appRoutes : Routes =  [
  {path:"login", component : LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"tiles", canActivate:[AuthenticationGuard] , component : TilesComponent},
  {path:"tiles/:Id",component:TileDetailComponent},
  {path:'welcome',component:WelcomeComponent, canActivate:[AuthenticationGuard]},
  {path:"",pathMatch: 'prefix', redirectTo:"login"},
  {path:"**", redirectTo:"login"}
 ];
 

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    mobileComponent,
    LoginComponent,
    StatusPipe,
    TileComponent,
    StarComponent,
    WelcomeComponent,
    TileDetailComponent,
    RegisterComponent 
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes),ReactiveFormsModule     
  ],
  providers: [AutheticationService,AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
