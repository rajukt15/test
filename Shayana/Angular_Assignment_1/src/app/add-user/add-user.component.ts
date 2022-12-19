import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  UserName: string = 'enter user name';

  userlist: { name: string; status: string }[] = [];
  dropdown = ['active', 'inactive'];

  @Input() totalcount: number = 0;
  @Input() activecount: number = 0;
  @Input() inactivecount: number = 0;

  @Output() AddUser = new EventEmitter<{
    userInput: string;
    selectValue: string;
  }>();

  onClick(userInput: string, selectValue: string) {
    if (!userInput) {
      alert('User Name Is Required');
    } else {
      this.AddUser.emit({ userInput, selectValue });
    }
  }
}
