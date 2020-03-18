import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFeatherModule } from 'ng-feather';
import { X } from 'ng-feather/icons';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFeatherModule.pick({ X })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
