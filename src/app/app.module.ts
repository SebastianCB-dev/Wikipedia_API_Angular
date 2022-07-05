import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './screen/home-page/home-page.component';
import { ResultsComponent } from './screen/results/results.component';
import { NotPageFoundComponent } from './screen/not-page-found/not-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResultsComponent,
    NotPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
