import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapTestComponent } from './map-test/map-test.component';
import { MapSingleValueComponent } from './map-single-value/map-single-value.component';

@NgModule({
  declarations: [
    AppComponent,
    MapTestComponent,
    MapSingleValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
