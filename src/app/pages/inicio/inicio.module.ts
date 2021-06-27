import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';

import { MastheadModule } from '../../components/masthead/masthead.module';
import { PortfolioModule } from '../../components/portfolio/portfolio.module';
import { AboutModule } from '../../components/about/about.module';
import { ContactModule } from '../../components/contact/contact.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    MastheadModule,
    PortfolioModule,
    AboutModule,
    ContactModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
