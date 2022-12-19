import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input('userdata') userdata: { userInput: string; selectValue: string }[] =
    [];
  @Input('totalcount') totalcount: number = 0;
  @Input('activecount') activecount: number = 0;
  @Input('inactivecount') inactivecount: number = 0;

  @Output() DeleteValue = new EventEmitter<any>();
  ondelete(deleteme: any) {
    this.userdata.splice(deleteme, 1);
  }
}
