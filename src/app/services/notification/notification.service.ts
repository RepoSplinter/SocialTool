import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import SecurityService from '../security/security.service';

@Injectable({
    providedIn: 'root'
})
export default class NotificationService {

    notifs: AngularFireList<any>;
    memberNotifs: AngularFireList<any>;

    constructor(
        private db: AngularFireDatabase,
        private securityService: SecurityService) {
        this.notifs = this.db.list('/notifications');
        this.memberNotifs = this.db.list("/notification/" + securityService.getUser().uid);
    }

    addNotif(notification) {
        return this.memberNotifs.push(notification);
    }

    // notifMember(notification) {
    //     return this.notifs.push(notification);
    // }

    getMemberNotifs() {
        return this.memberNotifs;
    }

}
