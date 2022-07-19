import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, Observable, of } from "rxjs";
import { ProjectsService } from "./projects.service";

@Injectable({
    providedIn: 'root'
})
export class ProjectResolver implements Resolve<any> {

    constructor(private _projectsService: ProjectsService, private router: Router, private route: ActivatedRoute) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        const projectId = route.paramMap.get('id');
        return projectId
            ? this._projectsService
                .getProjectById(+projectId)
                .pipe(
                    catchError(error => this.router.navigate(['/']))
                )
            : of(false);
    }

}