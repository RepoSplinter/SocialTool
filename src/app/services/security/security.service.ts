import { Injectable } from '@angular/core';
import UserModel from 'src/app/models/UserModel';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export default class SecurityService {

  constructor(private afAuth : AngularFireAuth , private afs: AngularFirestore) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        const _user = new UserModel(user);
        localStorage.setItem('user', JSON.stringify(_user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  authenticate(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
        const user = new UserModel(result.user);
        this.SetUserData(user.toData());
        resolve(user);
      }, error => {
        reject(error);
      })
    });
  }

  getUser(): UserModel {
    const userJson = localStorage.getItem("user");
    return new UserModel(JSON.parse(userJson));
  }



  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    return userRef.set(user, {
      merge: true
    })
  }

}
