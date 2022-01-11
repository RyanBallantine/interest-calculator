import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { InterestFormComponent } from './components/interest-form/interest-form.component';
import { InterestCalculateComponent } from './components/interest-calculate/interest-calculate.component';

@NgModule({
  declarations: [
    AppComponent,
    InterestFormComponent,
    InterestCalculateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
