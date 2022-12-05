import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CountryListServiceService } from './country-list-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountryListServiceService],
})
export class AppComponent {
  searchString: string = '';
  inputRecive(data: string) {
    this.searchString = data;
  }

  constructor() {}
}
