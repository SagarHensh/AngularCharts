import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmapdemo';
  // title = 'My first AGM project';
  lat: any = 51.678418;
  lng: any = 7.809007;
}
