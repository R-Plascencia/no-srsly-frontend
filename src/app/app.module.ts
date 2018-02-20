import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SourceComponent } from './source/source.component';
import { SourceService } from './source/source.service';
import { HttpModule } from '@angular/http';
import { ArticleService } from './article/article.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    SourceService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
