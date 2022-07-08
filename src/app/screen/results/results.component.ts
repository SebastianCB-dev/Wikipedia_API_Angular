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
    });  
    
  }
}
