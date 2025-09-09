import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K';
@Component({
  selector: 'app-authentication',
  imports: [RouterLink],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
})
export class AuthenticationComponent {
  pizzaImage = 'assets/Login/d112a6d7-d173-4ca7-a5ee-40f845719d18_841144.avif';
}
