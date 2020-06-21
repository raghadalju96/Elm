import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Individual } from '../individual';
import { IndiService } from '../indi.service';

@Component({
  selector: 'app-indi-list',
  templateUrl: './indi-list.component.html',
  styleUrls: ['./indi-list.component.css']
})
export class IndiListComponent implements OnInit {

  individual: Observable<Individual[]>;
  try = false;
  constructor(private individualService: IndiService) { }

  ngOnInit() {
    this.reloadData();

  }


  reloadData() {
    this.individualService.findAll().subscribe(data => {
      this.individual = data;

    });

  }

  deleteIndividual(nationalid: String) {
    this.individualService.deleteIndividual(nationalid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();

        },
        error => console.log(error));
  }


  deleteallEmployee() {
    this.individualService.deleteallIndividuals()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();

        },
        error => console.log(error));
  }

}