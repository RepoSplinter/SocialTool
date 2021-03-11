import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SubscriptionLike } from 'rxjs';
import UserModel from 'src/app/models/UserModel';
import SecurityService from 'src/app/services/security/security.service';
import { AppEventsService } from '../../services/app-events/app-events.service';
import { FakerService } from '../../services/faker/faker.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  saad = 'oussama';
  user: UserModel;
  private subscriptions: SubscriptionLike[] = [];
  constructor(
    private securityService: SecurityService,
    private appEvents: AppEventsService,
    private menu: MenuController
  ) { }

  toggleMenu() {
    this.menu.toggle('profile');
  }

  ngOnInit(): void {
    this.user = this.securityService.getUser();
    // Subscribe to tab click event
    this.subscriptions.push(
      this.appEvents.onTabClicks.subscribe((tab => {
        if (tab.id === 'profile') {
          this.menu.toggle('profile');
        }
      }))
    );
  }

  ionViewDidEnter() {
    this.menu.enable(true, 'profile');
  }

  ionViewDidLeave() {
    this.menu.enable(false, 'profile');

    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
