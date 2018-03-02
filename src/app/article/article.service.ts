import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Article } from './article';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ArticleService {
  private apiUrl = 'http://lvh.me:3000/api/v1/articles'
  // private apiUrl = 'https://nosrsly-backend.herokuapp.com/api/v1/articles'

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

  getArticlesByKeywords(formValue: string): Observable<Article[]> {
    let apiRoute = this.apiUrl + '/find'
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(JSON.stringify({ keywords: formValue['keywords']}));
    return this.http.post(apiRoute, JSON.stringify({ keywords: formValue['keywords'] }), options)
      .map((response: Response) => response.json());
  }

}
