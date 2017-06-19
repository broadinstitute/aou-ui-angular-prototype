import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({selector: 'sign-in', templateUrl: './sign-in.component.html'})
export class SignInComponent implements OnInit {
  constructor(
      private router: Router
  ) {}

  isLoaded: boolean = false;
  isSignedIn: boolean = false;

  signIn(e: Event): void {
    gapi.auth2.getAuthInstance().signIn();
  }

  signOut(e: Event): void {
    gapi.auth2.getAuthInstance().signOut();
  }

  ngOnInit(): void {
    gapi.load('auth2', this.handleAuth2Loaded.bind(this))
  }

  handleAuth2Loaded(): void {
    gapi.auth2.init({
      client_id: '887440561153-pb9gmue2cbbs2gbn9nkr35g0ifpvb8g5.apps.googleusercontent.com',
      hosted_domain: 'pmi-ops.org'
    }).then(this.handleAuth2Initialized.bind(this), this.handleAuth2Error.bind(this))
  }

  handleAuth2Initialized(): void {
    this.isLoaded = true;
    console.log('loaded: '+this.isLoaded);
    gapi.auth2.getAuthInstance().currentUser.listen(this.handleUserDidChange.bind(this))
    this.isSignedIn = gapi.auth2.getAuthInstance().currentUser.get().isSignedIn();
    console.log('signed in: '+this.isSignedIn);
  }

  handleAuth2Error(e): void {
    console.error(e);
  }

  handleUserDidChange(user): void {
    this.isSignedIn = user.isSignedIn();
  }
}
