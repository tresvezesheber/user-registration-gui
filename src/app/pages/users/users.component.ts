import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/types/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users! : User[];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((users) => {
      this.users = users.content;
    });
  }
}
