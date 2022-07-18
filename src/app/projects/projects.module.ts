import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailsComponent } from './containers/project-details/project-details.component';
import { ProjectListComponent } from './containers/project-list/project-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListItemComponent } from './components/project-list-item/project-list-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectListItemComponent,
    GettingStartedComponent,
    MenuListItemComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ProjectsModule { }
