import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: './addUser.component.css',
})
export class addUserComponent {
  newUserInput: { name: string; age: number }[] = [];
  onClick(inputName: string, inputAge: string) {
    if (inputName == '') {
      alert('Name is required');
    } else if (!inputAge) {
      alert('Age is required');
    } else {
      this.newUserInput.push({ name: inputName, age: Number(inputAge) });
    }
  }
}
