import { Component, OnInit } from '@angular/core';

import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioItem } from '../../models/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [
  ]
})
export class PortfolioComponent implements OnInit {

  public portfolioItems!: PortfolioItem[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerItems().subscribe(items => {
      this.portfolioItems = items;
    }, err => {
      console.log(err);
    });
  }

}
