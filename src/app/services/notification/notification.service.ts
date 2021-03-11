import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export default class NotificationService {

    notifs: AngularFireList<any>;

    constructor(private db: AngularFireDatabase) {
        this.notifs = this.db.list('/notifications');
    }

    addNotif(notification) {
        return this.notifs.push(notification);
    }

}
