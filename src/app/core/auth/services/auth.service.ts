import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { authConfig } from '../auth-config';
import { environment } from '../../../../environments/environment';
import { JwtService } from './jwt.service';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isDoneLoadingSubject$ = new ReplaySubject<boolean>();
  public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();
  private tokenKey = 'access_token';

  constructor(
    private router: Router,
  ) {}
  // ✅ Login (บันทึก token)
  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // ✅ Logout (ลบ token)
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/auth/login']);
  }

  // ✅ ตรวจสอบว่าผู้ใช้ล็อกอินหรือยัง
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // ✅ ดึง token ปัจจุบัน (เช่นใช้กับ HTTP Header)
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
