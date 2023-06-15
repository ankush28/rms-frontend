import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  addClass: boolean = false;
  toggleClass() {
    this.addClass = !this.addClass;
  }
}
