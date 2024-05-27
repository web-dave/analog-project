import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from '@analogjs/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      @for(route of routes;track route.path){
      <a [href]="'/' + route.path">{{ route.path?.toUpperCase() || 'HOME' }}</a>
      | }
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      nav {
        text-align: left;
        padding: 0 0 2rem 0;
      }
    `,
  ],
})
export class AppComponent {
  routes = routes;
}
