import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { ConnectionTesterComponent } from './containers/connection-tester/connection-tester.component';


@NgModule({
  declarations: [
    ConnectionTesterComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
