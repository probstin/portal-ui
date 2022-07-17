import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'my-projects', pathMatch: 'full' },
  { path: 'my-projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
