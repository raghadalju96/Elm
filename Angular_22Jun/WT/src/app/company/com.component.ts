import { Component, OnInit } from '@angular/core';

import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../experience/experience';
import { Router } from '@angular/router';
import { HttpClient,HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent implements OnInit {

  experience: Experience = new Experience();
  submitted = false;
  
  serx:number;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  constructor(  private experienceService: ExperienceService,private router:Router,private httpClient:HttpClient ) {
 }

  ngOnInit() {
  }

  newCompany(): void {
    this.submitted = false;
    //this.experience = new Experience();
  }
  onSubmit() {
    this.save();
  }
  
  save() {
    this.experienceService.createExperience(this.experience)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    //this.experience = new Experience();
  }

  onCall(){
   
    
    this.router.navigate(['/indi']);
  }


 
//Gets called when the user selects an image
public onFileChanged(event) {
  //Select File
  this.selectedFile = event.target.files[0];
}
//Gets called when the user clicks on submit to upload the image
onUpload() {
  console.log(this.selectedFile);
  
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  //Make a call to the Spring Boot Application to save the image
  this.httpClient.post('http://localhost:8080/image/uploadc', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
}
   


}





