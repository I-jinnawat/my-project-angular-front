import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls:['login.component.scss'],
  imports: [CommonModule, FormsModule, RouterLink],
})
export class LoginComponent {
  public authType = '';
  public title: string = '';
  username = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.authType = this.route.snapshot.url.at(-1)!.path;
    this.title = this.authType === 'login' ? 'Sign in' : 'Sign up';
    // if (this.authType === "register") {
    //   this.authForm.addControl(
    //     "email",
    //     new FormControl("", {
    //       validators: [Validators.required],
    //       nonNullable: true,
    //     }),
    //   );
    // }
  }
  onSubmit(): void {
    const loginData = {
      username: this.username,
      password: this.password,
    };

    this.http
      .post<any>('http://localhost:3000/auth/login', loginData)
      .subscribe({
        next: (response) => {
          console.log('Login success', response);

          // ถ้ามี token จาก server ให้เก็บไว้
          if (response.token) {
            localStorage.setItem('auth_token', response.token);
            this.router.navigate(['/dashboard']);
          } else {
            alert('Login failed: No token received');
          }
        },
        error: (err) => {
          console.error('Login error', err);
          alert('Login failed: ' + (err.error?.message || 'Unknown error'));
        },
      });
  }
}
