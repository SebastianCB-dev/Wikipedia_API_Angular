import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WikiDoc } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private _urlBase: string = 'https://en.wikipedia.org/w/rest.php/v1/search/page?q='

  constructor(private hc: HttpClient) { }

   getData(search: string): Observable<WikiDoc> {
    const urlAPI = this._urlBase + search + '&limit=10';
    const data = this.hc.get(urlAPI);
    return data as Observable<WikiDoc>;
  }
}
