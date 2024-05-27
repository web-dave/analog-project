import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../users.page';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    @for(user of users();track $index){
    <a [routerLink]="user.id">{{ user.firstname }}</a> <br />
    }
  `,
})
export default class UserListComponent {
  //   users = signal<IUser[]>([]);
  users = toSignal(
    inject(HttpClient).get<IUser[]>('http://localhost:5173/api/v1/users')
  );
}
