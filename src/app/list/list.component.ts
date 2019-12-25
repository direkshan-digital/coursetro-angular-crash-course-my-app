import { Component, OnInit } from '@angular/core';
import { OpenbreweryApiService } from '../openbrewery-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;
  constructor(private breweryApi: OpenbreweryApiService) {}

  ngOnInit() {
    this.breweryApi.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
