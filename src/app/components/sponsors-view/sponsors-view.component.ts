import { Component, OnInit } from '@angular/core';
import { SponsorsService } from "src/app/services/SponsorsService/sponsors.service";
import { Sponsor } from 'src/app/services/SponsorsService/sponsors.model';

@Component({
  selector: 'sponsors-view',
  templateUrl: './sponsors-view.component.html',
  styleUrls: ['./sponsors-view.component.css']
})
export class SponsorsViewComponent implements OnInit {

  public platinumSponsors: Sponsor[];
  public goldSponsors: Sponsor[];
  public silverSponsors: Sponsor[];
  public bronzeSponsors: Sponsor[];

  constructor(private sponsors: SponsorsService) { }

  ngOnInit() {
    let sponsorData = this.sponsors.getSponsorData();
    this.platinumSponsors = sponsorData.platinum;
    this.goldSponsors = sponsorData.gold;
    this.silverSponsors = sponsorData.silver;
    this.bronzeSponsors = sponsorData.bronze;
  }

}
