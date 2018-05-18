import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginScreenComponent} from '../screens/login-screen/login-screen.component';
import {SignUpScreenComponent} from '../screens/sign-up-screen/sign-up-screen.component';


const appRoutes: Routes = [
  {path: '', component: SignUpScreenComponent },
  {path: 'login', component: LoginScreenComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
