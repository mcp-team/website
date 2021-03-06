import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SponsorsViewComponent } from './components/sponsors-view/sponsors-view.component';

import { Html5UpService } from './services/Html5UpService/html5-up.service';
import { SponsorsService } from './services/SponsorsService/sponsors.service';
import { AboutUsViewComponent } from './components/about-us-view/about-us-view.component';
import { DeadendViewComponent } from './components/deadend-view/deadend-view.component';
import { ContactUsViewComponent } from './components/contact-us-view/contact-us-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SponsorsViewComponent,
    AboutUsViewComponent,
    DeadendViewComponent,
    ContactUsViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
  ],
  providers: [
    Html5UpService,
    SponsorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
