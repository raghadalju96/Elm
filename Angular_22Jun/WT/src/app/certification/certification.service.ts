import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certification } from './certification';



@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private certificationUrl: string;
  

  constructor(private http: HttpClient) { 
    this.certificationUrl = 'http://localhost:8080/api/';
     
  }
 
  findAll(): Observable<any> {  
    return this.http.get(this.certificationUrl+'certification');  
  }  
 
   createCertification(certification: any): Observable<any>{
    return this.http.post<Certification>(this.certificationUrl+'Certisave', certification);
  }



 
}
