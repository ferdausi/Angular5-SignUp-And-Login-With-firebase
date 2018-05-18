import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { SignUpScreenComponent } from './screens/sign-up-screen/sign-up-screen.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import { NavbarScreenComponent } from './screens/navbar-screen/navbar-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    SignUpScreenComponent,
    NavbarScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
