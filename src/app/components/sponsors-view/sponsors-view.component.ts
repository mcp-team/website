import { Component, OnInit } from '@angular/core';
import { SponsorsService } from "src/app/services/SponsorsService/sponsors.service";

@Component({
  selector: 'sponsors-view',
  templateUrl: './sponsors-view.component.html',
  styleUrls: ['./sponsors-view.component.css']
})
export class SponsorsViewComponent implements OnInit {

  constructor(private sponsors: SponsorsService) { }

  ngOnInit() {
  }

}
