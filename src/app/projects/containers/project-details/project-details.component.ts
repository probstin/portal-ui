import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription, tap } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';
import { projectDetailsMenu } from './project-details-menu';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project$!: Observable<any>;
  opened: boolean = true;
  menu: any[] = [...projectDetailsMenu];

  private _mediaSubscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _projectsService: ProjectsService,
    private _title: Title,
    private _router: Router,
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
      .data
      .pipe(
        map(({ project }) => project),
        tap((project: any) => {

          if (project.disableGs == undefined || !project.disableGs) {
            // add getting-started to the list
            this.menu.push({
              label: 'Getting Started',
              route: 'getting-started'
            });

            this._router.navigate([`getting-started`], { relativeTo: this._route });
          }

        })
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
