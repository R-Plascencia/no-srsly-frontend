import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Article } from './article';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ArticleService {
  private apiUrl = 'http://api.lvh.me:3000/v1/articles'

  constructor(
    private http: Http
  ) { }

  getArticleById(id: number): Observable<Article> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.apiUrl + '/' + id, options)
      .map((response: Response) => response.json());
  }

  getAllArticles(): Observable<Article[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.apiUrl, options)
      .map((response: Response) => response.json());
  }

}
