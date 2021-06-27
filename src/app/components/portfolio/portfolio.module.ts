import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioModalModule } from '../portfolio-modal/portfolio-modal.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioModalModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
