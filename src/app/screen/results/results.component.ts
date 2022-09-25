import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpellingService } from 'src/app/services/spelling.service';
import { WikiService } from 'src/app/services/wiki.service';

import { Page } from '../../models/types';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  _search: string = '';
  results: Page[] = [];
  isCharging: boolean = false;
  suggestion = '';
  resultPreview!: Page;
  
  imageError: string = 'https://mived.gob.do/wp-content/themes/consultix/images/no-image-found-360x260.png';


  constructor(private ar: ActivatedRoute,
              private router: Router,
              private ws: WikiService,
              private ss: SpellingService) { }

  ngOnInit(): void {
    // Get Params
    this.ar.params.subscribe(params => {
      if(!params["id"]) {
        this.router.navigateByUrl('/');
        return;
      }
      this._search = params["id"];
      this.startSearch();
    });
  }

  async startSearch() {
    this.isCharging = true;
    const data = this.ws.getData(this._search);
    data.subscribe( res => {
      this.results = res.pages;
      
      this.resultPreview = this.results[0];
    });
    if(this.results.length == 0) {
      console.log('Hello World');
      console.log(this._search);
      await this.ss.getSuggestion(this._search).then((data) => {
        for (const error of data.response.errors) {
            this.suggestion = `${error.bad, error.better.join(', ')}`;
        }
       })
       .catch((err) => {});
    }
    this.isCharging = false;
  }

  getUrl(): string {
    let image = this.imageError;
    if(this.resultPreview?.thumbnail?.url) {
      const url = this.resultPreview.thumbnail.url.replace('//', '');
      image = 'https://' + url;
    }
    return image;
  }

  changePreview(page: Page) {
    if(page === this.resultPreview) {
      return;
    }
    this.resultPreview = page;
  }


}
