import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayComponent } from './overlay/overlay.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { ErrorValidationComponent } from './error-validation/error-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    AddItemComponent,
    ItemListComponent,
    ErrorValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
