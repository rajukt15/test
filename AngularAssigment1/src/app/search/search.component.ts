import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  enteredSearchValue: string = '';

  // Output decorator to pass data from child to parent component
  @Output()

  // Creating custom event called EventEmitter which emits data of type string
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // To raise the above event, we're going to create the below method
  onSearchTextChanged() {
    // emit method is used to raise the event
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
