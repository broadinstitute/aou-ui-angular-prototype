// Mediate communication with the All of Us backend server, for workspace
// management etc.

import {Injectable} from '@angular/core';

@Injectable()
export class AllOfUsService {
  // TODO configure apiUrl per environment / set up environments.
  private apiUrl = 'http://all-of-us-workbench-test.appspot.com/api/v1/'
  constructor(private http: Http) {}

  // Gets a "hello world" value from the server (a test endpoint).
  getHelloWorld(): Promise<String> {
    return this.http
        .get(this.apiUrl)
        .toPromise()
        .then(response => response.text())
        .chatch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
