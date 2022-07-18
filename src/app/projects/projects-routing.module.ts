import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { ProjectDetailsComponent } from './containers/project-details/project-details.component';
import { ProjectListComponent } from './containers/project-list/project-list.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent, title: 'My Projects - Portal UI' },
  {
    path: ':id',
    component: ProjectDetailsComponent,
    children: [
      { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
      { path: 'getting-started', component: GettingStartedComponent },
      { path: 'applications', loadChildren: () => import('../applications/applications.module').then(m => m.ApplicationsModule) },
      { path: 'tools', loadChildren: () => import('../tools/tools.module').then(m => m.ToolsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
