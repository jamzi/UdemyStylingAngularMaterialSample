import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdButtonModule, MdCardModule, MdInputModule, MdSidenavModule, MdToolbarModule, MdListModule, MdIconModule, MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContactsComponent, AddContactDialog } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';
import { ContactsService } from "app/contacts.service";

const routes: Routes = [
  {
    path: '',
    component: PopularComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'popular',
    component: PopularComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent,
    AddContactDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdDialogModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent],
  entryComponents: [AddContactDialog]
})
export class AppModule { }
