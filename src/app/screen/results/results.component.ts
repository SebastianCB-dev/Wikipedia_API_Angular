import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  _search: string = '';

  constructor(private ar: ActivatedRoute,
              private router: Router) { }

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
    
  }
}
