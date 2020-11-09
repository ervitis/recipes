import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './atoms/title/title.component';
import { FormsComponent } from './forms/forms.component';
import { DetailComponent } from './forms/detail/detail.component';
import { MainPictureComponent } from './atoms/main-picture/main-picture.component';
import { NewComponent } from './forms/new/new.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './forms/list/list.component';
import { LoginComponent } from './forms/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoggerModule } from "ngx-logger";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FormsComponent,
    DetailComponent,
    MainPictureComponent,
    NewComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: environment.logLevel,
      disableConsoleLogging: environment.production,
      timestampFormat: "yyyy-MM-ddTHH:mm:ss:SSSZZZ"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
