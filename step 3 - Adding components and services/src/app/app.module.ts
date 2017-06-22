import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdInputModule, MdSidenavModule, MdToolbarModule, MdListModule, MdIconModule, MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
