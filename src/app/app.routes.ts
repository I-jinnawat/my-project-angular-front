import { Routes } from '@angular/router';
import { NoAuthGuard } from './core/auth/guards/NoAuthGuard.service';
import { AuthGuard } from './core/auth/guards/auth-guard.service';
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
    canActivate:[NoAuthGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
     canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
    // canActivate:[AuthGuard]
  }
];
