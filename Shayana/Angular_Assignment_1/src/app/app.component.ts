import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userList: any[] = [];

  isActive: string = '';
  isInactive: string = '';
  TotalCount: number = 0;
  ActiveCount: number = 0;
  InActiveCount: number = 0;

  AddUserData(data: any) {
    if (this.userList.length == 12) {
      alert('only 12 users allowed');
    } else {
      this.userList.push(data);
      this.TotalCount = this.userList.length;

      for (let i of this.userList) {
        this.isActive = i.selectValue;
      }
      if (this.isActive == 'active') {
        this.ActiveCount = this.ActiveCount + 1;
      } else if (this.isActive == 'inactive') {
        this.InActiveCount = this.InActiveCount + 1;
      } else {
        console.log(this.TotalCount);
      }
    }
  }
}
