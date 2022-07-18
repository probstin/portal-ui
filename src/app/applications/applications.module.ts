import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationListComponent } from './containers/application-list/application-list.component';


@NgModule({
  declarations: [
    ApplicationListComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
