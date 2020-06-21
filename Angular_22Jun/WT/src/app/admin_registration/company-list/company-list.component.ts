import { Observable } from 'rxjs';

import { Company } from './../company';
import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  company: Observable<Company[]>;
  constructor(private companyServiceService: CompanyServiceService) { }

  ngOnInit() {
    this.reloadData()
  }


  reloadData() {
    this.companyServiceService.findAll().subscribe(data => {
      this.company = data;
    });
  }


  deleteCompany(cr: String) {
    this.companyServiceService.deleteCompany(cr)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  deleteAllCompany() {
    this.companyServiceService.deleteAllCompany()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  UEmail(cr: String, email: String) {
    this.companyServiceService.UEmail(cr, email)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



}
