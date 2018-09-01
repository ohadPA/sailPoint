import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UtilsService {
  
  constructor(private _http: HttpClient ) { }

  getJSON (file){
    let result = this._http.get(file);
    return result;
  }
}