import { Component, Input, OnInit } from '@angular/core';
import { DataService, User } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user?: User;
  @Input() index: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  changeStatus(id: number) {
    this.dataService.changeStatus(id).subscribe();
    let users: any[] = this.dataService.users;
    users[this.index].status = this.user?.status == 0 ? 1 : 0;
  }
}
