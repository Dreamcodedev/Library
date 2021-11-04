import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import {  User, Auth } from '@firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isAuth =false;
  userData: any;


  

  constructor(private authService: AuthService,
    public afAuth: AngularFireAuth) { }


  ngOnInit(){

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuth = true;
      } else {
       this.isAuth = false;
      }
    })
    
  }
  

  onSignOut() {
    this.authService.signOutUser();
  }

}


