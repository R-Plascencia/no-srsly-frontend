import { Component, OnInit } from '@angular/core';
import { SourceService } from './source.service';
import { Source } from './source';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  sources: Source[] = [];
  currSource: Source;
  currTab = 1;
  initSpinner: boolean = false;
  showSpinner: boolean = false;
  showCopiedText: boolean = false;
  copiedId: number = -1;

  constructor( private sourceService: SourceService ) { }

  ngOnInit() {
    this.initSpinner = true;
    this.sourceService.getAllSources().subscribe(sources => {
      this.sources = sources;
      this.currSource = this.sources[0];
      
      this.initSpinner = false;
    });
  }

  showSource(id: number) {
    this.showSpinner = true;
    return this.sourceService.getSourceById(id).subscribe(source => {
      this.showSpinner = false;
      return this.currSource = source;
    })
  }

  setCurrTab(id: number) {
    this.currTab = id;
  }

  linkCopied(id: number) {
    this.showCopiedText = true;
    this.copiedId = id;

    setTimeout(function(){
      this.showCopiedText = false;
      this.copiedId = -1;
    }.bind(this), 2000);
  }
}
