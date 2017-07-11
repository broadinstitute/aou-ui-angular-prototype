// Mediate communication with the All of Us backend server, for workspace
// management etc.

import 'rxjs/add/operator/toPromise';

import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import {environment} from 'environment';

@Injectable()
export class AllOfUsService {
  constructor(private http: Http) {}

  // Gets a "hello world" value from the server (a test endpoint).
  getHelloWorld(): Promise<String> {
    return this.http
        .get(environment.allOfUsApiUrl)
        .toPromise()
        .then(response => response.text())
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
