import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})

export class AddItemComponent {
  
  @Output() inputValueMethodEvent = new EventEmitter<string>();

  @Output() errorEvent = new EventEmitter<string>();

  handleItem(addItemVal: string) {
    if (!addItemVal) {
      this.errorEvent.emit('Please enter valid input');
    } else if (addItemVal.length < 5) {
      this.errorEvent.emit('Entered character length should be greater than 5');
    } else {
      this.inputValueMethodEvent.emit(addItemVal);
    }
  }
}
