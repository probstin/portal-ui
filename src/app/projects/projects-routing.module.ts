import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './containers/project-details/project-details.component';
import { ProjectListComponent } from './containers/project-list/project-list.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent, title: 'My Projects - Portal UI' },
  { path: ':id', component: ProjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
