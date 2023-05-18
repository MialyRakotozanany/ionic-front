import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { UserComponent } from '../user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  declarations: [HomePage, UserComponent],
})
export class HomePageModule {}
