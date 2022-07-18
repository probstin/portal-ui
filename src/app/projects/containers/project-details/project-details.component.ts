import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable, Subscription, tap } from 'rxjs';
import { PortalObservable } from 'src/app/shared/models/portal-observable';
import { ProjectsService } from '../../services/projects.service';
import { projectDetailsMenu } from './project-details-menu';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project$!: Observable<PortalObservable>;
  links = ['Getting Started', 'Applications'];
  opened: boolean = true;
  
  public readonly menu = projectDetailsMenu;

  private _mediaSubscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _projectsService: ProjectsService,
    private _title: Title,
    private _mediaObserver: MediaObserver
  ) {
    this._mediaSubscription = this._mediaObserver
      .asObservable()
      .subscribe(() => this._handleMediaChange());
  }

  // ===================
  // lifecycle
  // ===================

  ngOnInit(): void {
    this.project$ = this._route
      .params
      .pipe(
        mergeMap(({ id }) => this._projectsService.getProjectById(+id)),
        tap(({ data }: PortalObservable) => this._title.setTitle(`${data?.name} - Portal UI`))
      );
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
  }

  // ===================
  // helpers
  // ===================

  private _handleMediaChange() {
    if (this._mediaObserver.isActive('lt-md')) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

}
