import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PortfolioItem } from '../models/portfolio-item.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  obtenerItems(): Observable<PortfolioItem[]> {
    return this.http.get('assets/data/portfolio-items.json').pipe(
      map(response => response as PortfolioItem[])
    )
  }

}
