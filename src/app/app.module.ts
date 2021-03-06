import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SourceComponent } from './source/source.component';
import { SourceService } from './source/source.service';
import { HttpModule } from '@angular/http';
import { ArticleService } from './article/article.service';
import { AboutComponent } from './about/about.component';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SourceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ClipboardModule
  ],
  providers: [
    SourceService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
