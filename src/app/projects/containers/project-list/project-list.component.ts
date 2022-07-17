import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentState } from 'src/app/shared/models/content-state.enum';
import { PortalObservable } from 'src/app/shared/models/portal-observable';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public readonly title= "My Projects";
  public readonly description = 'View and manage the projects you have access to.';
  public readonly ContentState = ContentState;
  
  projects$!: Observable<PortalObservable>;
  
  constructor(private _projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects$ = this._projectsService.getAllProjects();
  }

}
