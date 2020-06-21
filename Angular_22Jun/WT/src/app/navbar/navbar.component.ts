import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService ,private router:Router) { }

  ngOnInit(): void {

     
    
  }


  

}
