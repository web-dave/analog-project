import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUser } from '../users.page';

@Component({
  selector: 'app-users-detail',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    @if(user()){
    <h3>{{ user()?.firstname }}</h3>
    <h4>{{ user()?.lastname }}</h4>
    <h5>{{ user()?.company }}</h5>
    } @else { User not Found for id: {{ id() }} }
  `,
})
export default class UserListComponent {
  http = inject(HttpClient);
  id = input.required<string>();
  user = signal<IUser | undefined>(undefined);
  eRef = effect(() => {
    // if (this.id()) {
    this.http
      .get<IUser>('http://localhost:5173/api/v1/users/' + this.id())
      .subscribe((data) => this.user.set(data));
    // }
  });
  //   user = input.required<IUser>();
}
