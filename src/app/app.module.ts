import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FooterComponent} from './shared/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './blog/login/login.component';
import {SharedModule} from "./shared/shared.module";

import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {httpInterceptorProvides} from "./security/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,

    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [httpInterceptorProvides],
  bootstrap: [AppComponent]
})
export class AppModule { }
