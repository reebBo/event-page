import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ContactComponent } from './contact/contact.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubmitFormComponent,
    ContactComponent,
    ThingsToDoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
