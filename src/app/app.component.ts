import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RMS-frontend';
  constructor(private router: Router) {}
  shouldDisplaySidebar(): boolean {
    // Hide sidebar for the home and login pages
    return !this.router.url.includes('/home') && !this.router.url.includes('/login');
  }
}
