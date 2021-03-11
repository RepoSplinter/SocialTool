import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FakerService } from '../../services/faker/faker.service';
import { FormControl, Validators } from '@angular/forms';
import SecurityService from 'src/app/services/security/security.service';
import FeedService from 'src/app/services/feed/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  messageControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private modelCtl: ModalController,
    private feedService: FeedService,
    private securityService: SecurityService) {

  }


  cancelFeed() {
    this.modelCtl.dismiss();
  }

  postFeed() {
    if (this.messageControl.valid) {
      const user = this.securityService.getUser();
      const feed = {
        displayName: "Seeed Kdheiro",
        photoURL: 'https://cdn.discordapp.com/avatars/473443120466362369/ac33007a266780f2bea157b611c37398.png?size=256',
        content: this.messageControl.value,
        dateCreated: new Date(),
        likes: 0,
        comments: 0,
        shared: 0
      }
      this.feedService.post(feed);
      this.modelCtl.dismiss();

    }

  }


  ngOnInit(): void {

  }
}
