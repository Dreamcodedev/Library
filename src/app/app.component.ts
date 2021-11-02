import { Component } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor () { 

    const config = {
      apiKey: 'AIzaSyAXTypV4wx6pYpW-f0I1SjMA0SfSjzwcmw',
      authDomain: 'booklist-demo.firebaseapp.com',
      projectId: 'booklist-demo',
      storageBucket: 'booklist-demo.appspot.com',
      messagingSenderId: '1036260082983',
      appId: '1:1036260082983:web:df4f8f135cf926cf325502'
    };
    
    firebase.initializeApp(config);
    
  }

 

}
