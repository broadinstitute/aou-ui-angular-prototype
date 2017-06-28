// View for picking a repository.
//
// The template handles login/permission (by showing/hiding/disabling UI
// elements). In a real server, these would of course need to be enforced
// server-side.

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Repository} from 'app/models/repository';
import {RepositoryService} from 'app/services/repository.service';
import {User} from 'app/models/user';
import {UserService} from 'app/services/user.service';

@Component({templateUrl: './component.html'})
export class SelectRepositoryComponent implements OnInit {
  repositories: Repository[] = [];
  user: User;

  constructor(
      private router: Router,
      private userService: UserService,
      private repositoryService: RepositoryService
  ) {}

  ngOnInit(): void {
    this.userService.getLoggedInUser()
        .then(user => this.user = user);
    this.repositoryService.list()
        .then(repositories => this.repositories = repositories);
  }

  goToCohort(id: number): void {
    this.router.navigate(['/cohort', id]);
  }
}
