import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
    //// Get auth data, then get firestore user document // null
  }
  signUp( email: string, password: string ) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword( email, password )
        .catch(error => console.log(error));
  }
  login( email: string, password: string ) {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password )
        .then(
            response => console.log(response)
        ).catch();
  }
}
