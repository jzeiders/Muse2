import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class SCService {
  constructor(private http: Http) { }
  private SCUrl = "https://api.soundcloud.com";
  private CLIENT_ID = '253461658a378ff4b933ee29492644a6';


  search(term): Observable<string> {
    console.log("Service" + term);
    let params: URLSearchParams = new URLSearchParams();
    params.set('q', term);
    params.set("client_id", this.CLIENT_ID);
    return this.http.get(this.SCUrl + "/tracks", {
      search: params,
    })
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
