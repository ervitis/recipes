import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './atoms/title/title.component';
import { FormsComponent } from './forms/forms.component';
import { DetailComponent } from './forms/detail/detail.component';
import { MainPictureComponent } from './atoms/main-picture/main-picture.component';
import { NewComponent } from './forms/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TitleComponent,
    FormsComponent,
    DetailComponent,
    MainPictureComponent,
    NewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
