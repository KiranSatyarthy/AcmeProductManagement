import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light" style="margin:20px;">
    <a class="navbar-brand"><h4>{{pageTitle}}</h4></a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" routerLink="/welcome"><h2>Home</h2></a></li>
        <li><a class="nav-link" routerLink="/products"><h2>Product List</h2></a></li>
      </ul>

  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
