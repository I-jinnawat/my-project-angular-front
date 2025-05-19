import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './core/auth/services/user.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  constructor(private userService: UserService) {}
  title = 'my-project';
  // public get isDoneLoading(): Observable<boolean> {
  //   return this.userService.isDoneLoading$;
  // }

  async ngOnInit() {
    this.userService.initializeUser();
  }
}
