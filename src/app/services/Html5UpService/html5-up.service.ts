import { Injectable } from '@angular/core';
import * as $ from 'jquery';

declare var html5UpLoad;

@Injectable({
  providedIn: 'root'
})
export class Html5UpService {

  constructor() {}

  public reload() {
    html5UpLoad($);
  }
}
