import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public login(credentials: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, credentials);
  }

  public signup(userData: any): Observable<any> {
    const url = `${this.baseUrl}/signup`;
    return this.http.post(url, userData);
  }
  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public removeToken(): void {
    localStorage.removeItem('token');
  }
  isLoggedIn(): boolean {
    // Check if the token exists in local storage
    const token = localStorage.getItem('token');
    return !!token;
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthService {
//   private apiUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) {}

//   public signup(userData: any): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/signup`, userData);
//   }

//   public login(credentials: any): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/login`, credentials);
//   }

  // public setToken(token: string): void {
  //   localStorage.setItem('token', token);
  // }

  // public getToken(): string | null {
  //   return localStorage.getItem('token');
  // }

  // public removeToken(): void {
  //   localStorage.removeItem('token');
  // }
// }
