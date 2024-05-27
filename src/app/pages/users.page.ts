import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  company: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>Users</h2>
    <router-outlet />
  `,
})
export default class UsersComponent {}
