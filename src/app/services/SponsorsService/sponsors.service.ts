import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sponsor, SponsorType } from './sponsors.model';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  private sponsorData = {
    bronze: [],
    silver: [],
    gold: [],
    platinum: []
  }

  constructor(private http: HttpClient) {
    this.http.get<Sponsor[]>('assets/data/sponsors.json').subscribe((data: Sponsor[]) => {
      data.forEach((sponsor: Sponsor) => {
        switch(sponsor.type) {
          case SponsorType.Bronze: this.sponsorData.bronze.push(sponsor); break;
          case SponsorType.Silver: this.sponsorData.silver.push(sponsor); break;
          case SponsorType.Gold: this.sponsorData.gold.push(sponsor); break;
          case SponsorType.Platinum: this.sponsorData.platinum.push(sponsor); break;
        }
      });
    });
  }

  public getSponsorData() { return this.sponsorData; }

}
