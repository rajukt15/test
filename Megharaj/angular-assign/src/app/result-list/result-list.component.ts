import {
  Component,
  Input,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CountryListServiceService } from '../country-list-service.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [CountryListServiceService],
})
export class ResultListComponent {
  @Input() inputCollect: string = '';

  count: number = 0;
  resultArray: string[] = [];

  constructor(private ResultData: CountryListServiceService) {}

  ngOnChanges() {
    if (this.inputCollect.length >= 2) {
      this.resultArray = this.ResultData.searchTextinCountryList(
        this.inputCollect 

      );
      this.count = this.resultArray.length;
    } else {
      this.count = 0;
    }
  }
}
