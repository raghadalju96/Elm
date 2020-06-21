import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardEducationService {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodedAuthenticationService.isEduLoggedIn())
      return true;
    
    this.router.navigate(['home']);
   
    return false;
    


}}
