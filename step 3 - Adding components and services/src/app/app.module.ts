import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';

import { ContactsService } from "app/contacts.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
