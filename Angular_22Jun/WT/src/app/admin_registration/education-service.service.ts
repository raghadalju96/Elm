import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from './education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationUrl: string;
  private educationUrl1: string;
  private educationUrl2: string;
  constructor(private http: HttpClient) {
    this.educationUrl = 'http://localhost:8080/api/';
    this.educationUrl1= 'http://localhost:8080/api/deleducation';
    this.educationUrl2= 'http://localhost:8080/api/deleducationall';
   }


   findAll(): Observable<any> {  
    return this.http.get(this.educationUrl+'education');  
  }  

  
 
   createEducation(education: any): Observable<any>{
    return this.http.post<Education>(this.educationUrl+'educationsave', education);
  }


  registerEducation(education: any): Observable<any>{
    return this.http.post<Education>(this.educationUrl+'registeredu', education);
  }


  loginEducation(education: any): Observable<any>{
    return this.http.post<Education>(this.educationUrl+'loginedu', education);
  }


  deleteEducation(eduid: String): Observable<any> {
    return this.http.delete(`${this.educationUrl1}/${eduid}`, { responseType: 'text' });
  }


  deleteallEducation(): Observable<any> {
    return this.http.delete(`${this.educationUrl2}`, { responseType: 'text' });
  }
}
