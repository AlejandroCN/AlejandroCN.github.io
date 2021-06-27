import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioModalComponent } from './portfolio-modal.component';

@NgModule({
  declarations: [PortfolioModalComponent],
  imports: [
    CommonModule
  ],
  exports: [PortfolioModalComponent]
})
export class PortfolioModalModule { }
