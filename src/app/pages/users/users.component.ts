import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Page, User } from '../../core/types/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users!: User[];
  page!: Page;

  page_ = 1;

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((users) => {
      this.page = users;
      this.users = users.content;
    });
  }

  handlePageChange(event: number): void {
    this.page_ = event;
    this.service.goToPage(this.page_ - 1).subscribe((users) => {
      this.page = users;
      this.users = users.content;
    });
  }
}
