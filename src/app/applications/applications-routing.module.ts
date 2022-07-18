import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationListComponent } from './containers/application-list/application-list.component';

const routes: Routes = [
  { path: '', component: ApplicationListComponent, title: 'Applications - Portal UI' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
