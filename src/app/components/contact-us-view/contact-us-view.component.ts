import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-view',
  templateUrl: './contact-us-view.component.html',
  styleUrls: ['./contact-us-view.component.css']
})
export class ContactUsViewComponent implements OnInit {

  public email = "contact-us@mcp-team.com";

  constructor() { }

  ngOnInit() {
  }

}
