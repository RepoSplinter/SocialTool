import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FeedPageRoutingModule,

    SharedModule
  ],
  declarations: [FeedPage]
})
export class FriendsPageModule { }
