import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WikiDoc } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private _urlBase: string = 'https://en.wikipedia.org/w/rest.php/v1/search/page?q=earth&limit=10'

  constructor(private hc: HttpClient) { }

   getData(search: string): Observable<WikiDoc> {
    const data = this.hc.get(this._urlBase);
    return data as Observable<WikiDoc>;
  }
}
