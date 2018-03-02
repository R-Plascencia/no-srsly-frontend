import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Source } from './source';
import 'rxjs/add/operator/map';


@Injectable()
export class SourceService {
  private apiUrl = 'http://lvh.me:3000/api/v1/sources'
  // private apiUrl = 'https://nosrsly-backend.herokuapp.com/api/v1/sources'

  constructor(
    private http: Http
  ) { }

  getAllSources(): Observable<Source[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers })

    return this.http.get(this.apiUrl)
      .map((response: Response) => response.json());
  }

  getSourceById(id: number): Observable<Source> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers })

    return this.http.get(this.apiUrl + '/' + id, options)
      .map((response: Response) => response.json());
  }

  handleError() {
    return Observable.of(false);
  }

}
