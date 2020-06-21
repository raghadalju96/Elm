import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  user:string;


  constructor(private router: Router) { }

  authenticate(username, password) {

    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('authenticaterUser', username);


      return true;
    }
    return false;
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }


  isIndiLoggedIn() {
   if( sessionStorage.getItem('authenticaterIndi') ||  sessionStorage.getItem('authenticaterCom')|| sessionStorage.getItem('authenticaterEdu'))
    return !(this.user === null);
  }


  isComLoggedIn() {
    let user = sessionStorage.getItem('authenticaterCom');
     return !(user === null);
   }


   isEduLoggedIn() {
    let user = sessionStorage.getItem('authenticaterEdu');
     return !(user === null);
   }






  logout() {
    
    sessionStorage.clear();
    localStorage.clear();
   
    
  }
  
}