import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { getAuth, onAuthStateChanged, User } from '@firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  user! : User;

  constructor(private router : Router,
              private authService : AuthService,
              public afAuth: AngularFireAuth ) { }


              canActivate(): Observable<boolean> | Promise<boolean> | boolean {
                return new Promise(
                  (resolve, reject) => {
                    this.afAuth.authState.subscribe(
                      (user) => {
                        if(user) {
                          resolve(true);
                        } else {
                          this.router.navigate(['/auth', 'signin']);
                          resolve(false);
                        }
                      }
                    );
                  }
                );
              }

              
}
