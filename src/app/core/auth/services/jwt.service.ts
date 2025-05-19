import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class JwtService {
    constructor(
    private readonly router: Router
  ) {}
  private tokenKey = 'access_token';
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  saveToken(token: string): void {
    window.localStorage['access_token'] = token;
  }

  destroyToken(): void {
    window.localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
   logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/auth/login']);
  }
}
