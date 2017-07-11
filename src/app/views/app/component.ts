// UI Component framing the overall app (title and nav).
// Content is in other Components.

import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {environment} from 'environment';

@Component({
  selector: 'app-aou',
  styleUrls: ['./component.css'],
  templateUrl: './component.html'
})
export class AppComponent implements OnInit {
  private baseTitle: string;

  constructor(
      private titleService: Title,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.baseTitle = this.titleService.getTitle();
    if (environment.displayTag) {
      this.baseTitle = `[${environment.displayTag}] ${this.baseTitle}`;
      this.titleService.setTitle(this.baseTitle);
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let currentRoute = this.activatedRoute;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        if (currentRoute.outlet == 'primary') {
          currentRoute.data.subscribe(value =>
              this.titleService.setTitle(`${value.title} | ${this.baseTitle}`));
        }
      }
    });
  }
}
