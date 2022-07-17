import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailsComponent } from './containers/project-details/project-details.component';
import { ProjectListComponent } from './containers/project-list/project-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListItemComponent } from './components/project-list-item/project-list-item.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectListItemComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class ProjectsModule { }
