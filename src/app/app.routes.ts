import { Routes } from '@angular/router';
import { NoAuthGuard } from './core/auth/guards/NoAuthGuard.service';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  }
];
