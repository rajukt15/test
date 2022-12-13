import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { userListComponent } from './userList/userList.component';
import { addUserComponent } from './addUser/addUser.component';


@NgModule({
  declarations: [
    AppComponent,
    userListComponent,
    addUserComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
