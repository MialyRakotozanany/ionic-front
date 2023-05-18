import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, User } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users = [];
  filtered = [];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getUsers() {
    this.dataService.getUsers().subscribe((response) => {
      this.dataService.users = response;
      this.filtered = response;
    });
  }

  onSearch(event: any) {
    const searchTerm = event.target.value;
    this.filtered = this.dataService.users.filter((item) =>
      this.isMatched(item, searchTerm)
    );
  }

  isMatched(item: any, keyword: any) {
    const columns = ['lastname', 'firstname'];
    for (const column of columns) {
      if (item[column].includes(keyword)) return true;
    }
    return false;
  }
}
