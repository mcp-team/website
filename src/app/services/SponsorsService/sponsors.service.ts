import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sponsor, Sponsors } from './sponsors.model';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private http: HttpClient) {
    this.getJson().subscribe(data => {
      console.log(data); // do something else here
    });

  }

  private getJson(): Observable<Object> {
    return this.http.get<Object>('assets/data/sponsors.json');
  }
  
}
