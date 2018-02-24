import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article/article.service';
import { Article } from '../article/article';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: Article[] = [];
  showSpinner: boolean = false;
  searched: boolean = false;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
  }

  getArticlesFromKeywords(form: NgForm) {
    console.log(form.value);
    this.searched = true;
    
    this.articleService.getArticlesByKeywords(form.value)
      .subscribe(result => { 
        this.results = result
        this.toggleSpinner();
      });
  }

  toggleSpinner() {
    this.showSpinner = !this.showSpinner;
  }

}
