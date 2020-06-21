import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../admin_registration/company';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';
import { IndiService } from '../admin_registration/indi.service';
import { Individual } from '../admin_registration/individual';
import { CompanyServiceService } from '../admin_registration/company-service.service';
import { EducationService } from '../admin_registration/education-service.service';
import { Education } from '../admin_registration/education';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  individual = new Individual();
  education = new Education();
  company = new Company();

  msg = ''
  uname = 'admin'
  paw = ''
  isUserLoggedIn: boolean
  isIndiLoggedIn:boolean
  constructor(private router: Router, private indiService: IndiService, private comService: CompanyServiceService, private eduService: EducationService,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {


    this.isUserLoggedIn = this.hardcodedAuthenticationService.isAdminLoggedIn();
    

  }


  AdminLogin() {

    if (this.hardcodedAuthenticationService.authenticate(this.uname, this.paw)) {

      this.router.navigate(['/admin']);
      return true;
    }
    else {
      return false;
    }


  }


  loginIndi() {

    this.indiService.loginIndividual(this.individual).subscribe(
      data => {
        console.log("response recieved");
    

       sessionStorage.setItem('authenticaterIndi', data.nationalid);
        localStorage.setItem('fname',data.firstname); 
        localStorage.setItem('mname',data.mname); 
        localStorage.setItem('lname',data.lastname); 
        localStorage.setItem('id',data.nationalid); 
        localStorage.setItem('gender',data.gender); 
        localStorage.setItem('dob',data.dob); 
        localStorage.setItem('address',data.address); 
        localStorage.setItem('mobile',data.phoneNumber); 
        localStorage.setItem('email',data.email); 
        this.router.navigate(["/indi"])


      }
      ,
      error => {
        console.log("exception occured");
        this.msg = "Enter valid National Id and password"
      }
    )

  }



  loginCompany() {

    this.comService.loginCompany(this.company).subscribe(
      data => {
        console.log("response recieved");
        sessionStorage.setItem('authenticaterCom', data.email);
     
        this.router.navigate(["/com"])


      }
      ,
      error => {
        console.log("exception occured");
        this.msg = "Enter valid email and password"
      }
    )

  }

  loginEducation() {

    this.eduService.loginEducation(this.education).subscribe(
      data => {
        console.log("response recieved");
        sessionStorage.setItem('authenticaterEdu', data.email);
        this.router.navigate(["/edu"])


      }
      ,
      error => {
        console.log("exception occured");
        this.msg = "Enter valid email and password"
      }
    )

  }


}