import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';             //register of 'FormModule' for template-driven form 
import { SignupService } from './service/signup.service';
import { HttpClientModule } from '@angular/common/http';      //register of http for use in service to send data to backend api

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                           //registeration of FormModule
    HttpClientModule                       // used in SignupService
  ],
  providers: [SignupService],                    //register services
  bootstrap: [AppComponent]
})
export class AppModule { }
