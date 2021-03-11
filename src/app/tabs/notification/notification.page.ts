import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config } from '@ionic/angular';
import NotificationService from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.page.html',
  styleUrls: ['notification.page.scss']
})
export class NotificationPage implements OnInit {

  notifs = [];
  activeSegment: FormControl = new FormControl('feedback');
  segments: any[] = [
    { title: 'Feedback', value: 'feedback' },
    { title: 'Comments', value: 'comments' }
  ];

  isIos: boolean;

  constructor(
    public config: Config,
    private notificationService: NotificationService) {

  }

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';
    this.notificationService.getMemberNotifs().snapshotChanges().subscribe(res => {
      this.notifs = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['key'] = item.key;
        this.notifs.push(a);
      })
    })
  }
}
