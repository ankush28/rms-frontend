import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public userData = {
    name: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    ownerName: ''
  };

  constructor(private authService: AuthService) {}

  public signup(): void {
    this.authService.signup(this.userData)
      .subscribe(
        (response:any) => {
          // Handle successful signup
          // this.authService.setToken(response.token);
          console.log('Signed up successfully', response);
        },
        (error: any) => {
          // Handle signup error
          console.error('Signup error', error);
        }
      );
  }
}



