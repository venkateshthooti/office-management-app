import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private _router: Router) {}

  logoutComponet() {
    if (confirm('Are you sure you want to logout')) {
      this._router.navigateByUrl('/login');
      sessionStorage.removeItem('token');
    }
    // if (confirm('Are you sure you want to logout')) {
    //   //go to login
    //   this._router.navigateByUrl('/login');
    //   // delete token
    //   sessionStorage.removeItem('token');
    // }
  }
}
