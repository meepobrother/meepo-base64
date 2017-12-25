import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MeepoCoreModule } from 'meepo-core';
import { Base64Module } from '../../src/app/app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Base64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

