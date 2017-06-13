// UI Component framing the overall app (title and nav).
// Content is in other Components.

import { Component } from '@angular/core';

@Component({
  selector: 'aou-app',
  styleUrls: [ './app.component.css' ],
  template: `
    <div class="logos-container">
      <img class="main-logo" src="images/all-of-us-logo.svg" alt="All of Us">
      <img class="portal-logo" src="images/portal-logo.svg" alt="Researcher Portal">
    </div>
    <nav>
      <a routerLink="/login" routerLinkActive="active">Switch User</a>
      <a routerLink="/repository" routerLinkActive="active">Select CDR</a>
    </nav>
    <!--
      Angular's builtin Router module will attach specific views here
      based on clicking routerLink elements (above) or router.navigate calls.
    -->
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'All of Us Researcher Portal Prototype';
}
