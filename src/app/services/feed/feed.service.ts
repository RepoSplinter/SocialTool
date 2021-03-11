import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
    providedIn: 'root'
})
export default class FeedService {

    feedListRef: AngularFireList<any>;
    feedRef: AngularFireObject<any>;

    constructor(private db: AngularFireDatabase, private notifService: FeedService) {
        this.feedListRef = this.db.list('/feeds');
    }

    post(feed: any) {
        return this.feedListRef.push(feed)
    }

    getFeeds() {
        return this.feedListRef;
    }

    // Get Single
    getFeed(id: string) {
        this.feedRef = this.db.object('/feeds/' + id);
        return this.feedRef;
    }


}
