import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../core/layout/header.component';
import { Observable } from 'rxjs';
import { User } from '../../core/auth/models/user.model';
import { UserService } from '../../core/auth/services/user.service';
import { NgIf ,AsyncPipe} from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent,NgIf,AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
 user$!: Observable<User | null>;
 constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.user$ = this.userService.currentUser;
  }
}
