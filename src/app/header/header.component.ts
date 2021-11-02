import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged } from '@firebase/auth';
import { Observable } from '@firebase/util';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth?: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(){}
  

  onSignOut() {
    this.authService.signOutUser();
  }

}
