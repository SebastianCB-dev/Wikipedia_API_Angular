import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  resultPreview!: Page;
  
  imageError: string = 'https://mived.gob.do/wp-content/themes/consultix/images/no-image-found-360x260.png';

  constructor(private ar: ActivatedRoute,
              private router: Router,
              private ws: WikiService) { }

  ngOnInit(): void {
    // Get Params
    this.ar.params.subscribe(params => {
      if(!params["id"]) {
        this.router.navigateByUrl('/');
        return;
      }
      this._search =  params["id"];
      this.startSearch();
    });
  }

  startSearch() {
    this.isCharging = true;
    const data = this.ws.getData(this._search);
    data.subscribe( res => {
      this.results = res.pages;
      this.isCharging = false;
      this.resultPreview = this.results[0];
    });
  }

  getUrl(): string {
    let image = this.imageError;
    if(this.resultPreview?.thumbnail?.url) {
      const url = this.resultPreview.thumbnail.url.replace('//', '');
      image = 'https://' + url;
    }
    return image;
  }

}
