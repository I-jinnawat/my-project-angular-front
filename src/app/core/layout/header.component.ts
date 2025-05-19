import { Component, inject } from '@angular/core';
import { UserService } from '../auth/services/user.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
// import { IfAuthenticatedDirective } from '../auth/if-authenticated.directive';
import { JwtService } from '../auth/services/jwt.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLinkActive,
    RouterLink,
    AsyncPipe,
    NgIf,
    // IfAuthenticatedDirective,
  ],
  standalone: true,
})
export class HeaderComponent {
  constructor(private jwtService: JwtService,private router:Router) {}
  currentUser$ = inject(UserService).currentUser;

  public logout() {
    this.jwtService.logout(); 
    this.router.navigate(['/auth/login']); 
  }
}
