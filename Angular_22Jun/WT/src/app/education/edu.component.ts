import { Component, OnInit } from '@angular/core';
import { Certification } from '../certification/certification';
import { CertificationService } from '../certification/certification.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})




export class EduComponent implements OnInit {

  certification: Certification = new Certification();
  submitted = false;
  serx:number;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  certificateId:string;
  PDFFile;

  constructor(private certificationService: CertificationService,private httpClient:HttpClient,private router:Router) { }
  ngOnInit(): void {

  }

  newCompany(): void {
    this.submitted = false;
    //this.certification = new Certification();
  }


  onSubmit() {
    
    this.save();
    
  }

  save() {
    this.certificationService.createCertification(this.certification)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
          
         
        },
        error => console.log(error));
    //this.certification = new Certification();
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
  this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
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





  


