import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public currentUrl = new BehaviorSubject<string | undefined>(undefined);

  constructor(private router: Router) {
    this.router
      .events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.currentUrl.next(event.urlAfterRedirects));
  }

}
