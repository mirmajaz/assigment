import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RedditDataProvider Provider');
  }
  getLocalData(){
    this.http.get('assests/models/data.json').map(res => res.json()).subscribe(data => {
        console.log(data);
    };
}
}
