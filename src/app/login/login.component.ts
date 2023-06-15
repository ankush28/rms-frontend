import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {
    localStorage.clear();
  }

  public login(): void {
    this.authService.login(this.credentials)
      .subscribe(
        (response: any) => {
          // this.authService.setToken(response.token);
          this.authService.setToken(response.token);
          this.router.navigate(['/dashboard']);
          console.log('Logged in successfully', response);
        },
        (error: any) => {
          // Handle login error
          console.error('Login error', error);
        }
      );
  }
}
