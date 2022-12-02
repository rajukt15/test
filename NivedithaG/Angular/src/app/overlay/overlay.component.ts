import { Component } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
})
export class OverlayComponent {
  // stores the inputvalue
  itemList: string[] = [];

  errorValue: string = '';

  // inputItems:string=''

  inputValueMethod(inputItems: string) {
    if (this.itemList.includes(inputItems)) {
      this.errorValue = 'Item already exist';
    } else {
      console.log(inputItems);
      this.itemList.push(inputItems);
    }
  }

  receiveErrorMessage(errorMessage: string) {
    this.errorValue = errorMessage;
  }
}
