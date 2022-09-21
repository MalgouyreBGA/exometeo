import { Injectable } from '@angular/core';
// pas defaut
import {HttpClient} from '@angular/common/http';
//import { throwError } from 'rxjs';
//import 'rxjs/Rx';
import {Config} from './constant'
//

//@Injectable(/*{providedIn: 'root'}*/)

export class MeteoService {
// add
private BaseUrl :string = "https://api.openweathermap.org/data/2.5/";

  constructor(/*add private _http: HttpClient*/) { }
  //add
  /* recevezLeMeteo(ville){
    return  this._http.get( this.BaseUrl + 'weather?q='+ ville + '&appid=' + Config.cleapi).map(reponse => {reponse.json(); console.log(reponse)})
  
    .catch(this.handleError);
  }

  //error mangement
  private handleError (error: any) {
    
    let errMsg: string;
     if (error instanceof Response) {
       const body = error.json() || '';
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return throwError(() => new Error(errMsg));
  }
  */
}