import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: './userList.component.css',
})
export class userListComponent implements DoCheck {
  @Input('userData') userData: { name: string; age: number }[] = [];

  existingUserData: { name: string; age: number }[] = [
    { name: 'Thomas', age: 28 },
    { name: 'Diana', age: 16 },
    { name: 'Leo', age: 23 },
    { name: 'Harry', age: 17 },
  ];

  ngDoCheck() {
    if (this.userData.length <= 0) {
      return;
    }
    this.existingUserData = [
      ...this.existingUserData,
      this.userData[this.userData.length - 1],
    ];
    console.log(this.existingUserData);
  }

  table = 'table-Style';
}
