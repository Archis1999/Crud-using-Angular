import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrudBooksComponent } from './crud-books/crud-books.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudBooksComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
