import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output() inputTransfer: EventEmitter<string> = new EventEmitter<string>();

  searchCountry(enterdInout: Event) {
    this.searchText = (<HTMLInputElement>enterdInout.target).value;
    this.inputTransfer.emit(this.searchText);
  }
}
