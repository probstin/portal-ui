import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent implements OnInit {

  expanded: boolean = false;

  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;

  @Input() item!: any;
  @Input() depth!: number;

  constructor(
    public _navigationService: NavigationService,
    public router: Router
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {
    this._navigationService
      .currentUrl
      .subscribe((url: any) => {
        if (this.item.route && url) {
          console.log(this.item.route);
          this.expanded = url.indexOf(`/${this.item.route}`) === 0;
          this.ariaExpanded = this.expanded;
        }
      });
  }

  onItemSelected(item: any): void {
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}
