import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionTesterComponent } from './containers/connection-tester/connection-tester.component';

const routes: Routes = [
  { path: '', redirectTo: 'connection-tester', pathMatch: 'full' },
  { path: 'connection-tester', component: ConnectionTesterComponent, title: 'Connection Tester - Portal UI' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
