// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase : {
    apiKey: 'AIzaSyAXTypV4wx6pYpW-f0I1SjMA0SfSjzwcmw',
    authDomain: 'booklist-demo.firebaseapp.com',
    projectId: 'booklist-demo',
    storageBucket: 'booklist-demo.appspot.com',
    messagingSenderId: '1036260082983',
    appId: '1:1036260082983:web:df4f8f135cf926cf325502'
  }
  
  //firebase.initializeApp(config);



};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
