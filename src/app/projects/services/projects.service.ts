import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ContentState } from 'src/app/shared/models/content-state.enum';
import { PortalObservable } from 'src/app/shared/models/portal-observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  PROJECTS_API_ROOT;

  constructor(private _http: HttpClient) {
    this.PROJECTS_API_ROOT = environment.API_ROOT + '/projects';
  }

  getAllProjects(): Observable<PortalObservable> {
    return this._http
      .get<any>(this.PROJECTS_API_ROOT)
      .pipe(
        map((projects: any[]) => ({ state: ContentState.LOADED, data: projects })),
        startWith({ state: ContentState.LOADING }),
        catchError((e: any) => of({ state: ContentState.ERROR, error: e.message }))
      );
  }

}
