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
  showSpinner: boolean = false;

  constructor( private sourceService: SourceService ) { }

  ngOnInit() {
    this.showSpinner = true;
    this.sourceService.getAllSources().subscribe(sources => {
      this.sources = sources;
      this.currSource = this.sources[0];
      
      this.showSpinner = false;
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
}
