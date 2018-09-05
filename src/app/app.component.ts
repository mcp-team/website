import { Component, AfterViewInit } from '@angular/core';
import { Html5UpService } from './services/Html5UpService/html5-up.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private html5up: Html5UpService) {}

  ngAfterViewInit() {
    this.html5up.reload();
  }
}
