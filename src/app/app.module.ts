import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyBUYhk7JKoA5WTtvGiRCzbqAB6Q_jvc1fA',
    }),
    AgmDirectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
