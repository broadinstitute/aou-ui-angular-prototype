import { Injectable } from '@angular/core';

import { User } from './user';
import { PermissionLevel } from './permission-level';

@Injectable()
export class UserService {
  private user: User = {id: 1, name: 'All of Us User', permission: PermissionLevel.Public}

  getLoggedInUser(): Promise<User> {
    return Promise.resolve(this.user);
  }

  logIn(name: string, permission: PermissionLevel): Promise<User> {
    this.user = {id: 42, name: name, permission: permission};
    return this.getLoggedInUser();
  }

  logOut(): Promise<void> {
    this.user = null;
    return Promise.resolve(null);
  }
}
