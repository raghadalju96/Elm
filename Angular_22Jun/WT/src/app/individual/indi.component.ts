import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience/experience.service';

import { Observable } from 'rxjs';
import { Individual } from '../admin_registration/individual';
import { Certification } from '../certification/certification';
import { CertificationService } from '../certification/certification.service';
import { IndiService } from '../admin_registration/indi.service';
import { Experience } from '../experience/experience';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-indi',
  templateUrl: './indi.component.html',
  styleUrls: ['./indi.component.css']
})
export class IndiComponent implements OnInit {
  experience: Observable<Experience[]>;
  individual: Observable<Individual[]>;
  certification: Observable<Certification[]>;
  fname:string;
  mname:string;
  lname:string;
  id:string;
  gender:string;
  dob:string;
  address:string;
  mobile:string;
  email:string;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageName1:any

  
 
  
  
  

  constructor(private experienceService: ExperienceService, private certificationService: CertificationService,
    private individualService: IndiService,private router:Router,private httpClient:HttpClient) { }
    


  ngOnInit(): void {

    this.experienceService.findAll().subscribe(data => {
      this.experience = data;
      
      
    });


    this.certificationService.findAll().subscribe(data => {
      this.certification = data;
      

    });

    this.individualService.findAll().subscribe(data => {
      this.individual = data;

    }
    );


    this.fname=localStorage.getItem('fname'); 
    this.mname = localStorage.getItem('mname');
    this.lname = localStorage.getItem('lname');
    this.id = localStorage.getItem('id');
    this.gender = localStorage.getItem('gender');
    this.dob = localStorage.getItem('dob');
    this.address = localStorage.getItem('address');
    this.mobile = localStorage.getItem('mobile');
    this.email = localStorage.getItem('email');

   
   

    

  

    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


    var modal2 = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }

    var modal3 = document.getElementById('id03');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal3) {
        modal3.style.display = "none";
      }
    }


    var modal4 = document.getElementById('id04');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal4) {
        modal4.style.display = "none";
      }
    }
  }


  reloadDataExperience() {
    this.experience = this.experienceService.findAll();
  }


  reloadDataCert() {
    this.certification = this.certificationService.findAll();
  }


  reloadDataIndividual() {
    this.individual = this.individualService.findAll();


  }

  

  getImage() {
   
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );

  }
  getImageC() {
    
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName1)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );

  }



 
  


}
