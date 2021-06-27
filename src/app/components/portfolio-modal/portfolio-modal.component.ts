import { Component, Input, OnInit } from '@angular/core';

import { PortfolioItem } from '../../models/portfolio-item.model';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styles: [
  ]
})
export class PortfolioModalComponent implements OnInit {

  @Input() public portfolioItem!: PortfolioItem;

  constructor() { }

  ngOnInit(): void {
  }

}
