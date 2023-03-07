import { Component } from '@angular/core';

@Component({
  selector: 'portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dropdownExpanded = false;

  onLogout(): void {
    this.dropdownExpanded = false;
    console.log('logout');
  }
}
