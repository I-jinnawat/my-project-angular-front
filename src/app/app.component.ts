import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth/services/auth.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private authService: AuthService) {}
  title = 'my-project';
  public get isDoneLoading(): Observable<boolean> {
    return this.authService.isDoneLoading$;
  }

  async ngOnInit() {
    this.authService.runInitialLoginSequence();
  }
}
