import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article/article.service';
import { Article } from '../article/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: Article[] = [];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
  }

}
