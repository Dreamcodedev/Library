
import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { createUserWithEmailAndPassword, UserCredential, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import {AngularFireAuth} from 'angularfire2/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() {}

  createNewUser(email:string, password:string ) {
    

    return new Promise<void>(
      (resolve, reject) => {
        createUserWithEmailAndPassword (getAuth(), email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
    }
     signInUser(email: string, password: string) {
      return new Promise<void>(
        (resolve, reject) => {
          signInWithEmailAndPassword(getAuth(),email, password).then(
            () => {
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
        }
      );
  }

  signOutUser() {
    signOut(getAuth());
}
}
