import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  self;

  constructor(private db: AngularFirestore) { }

  register(name: string) {
    return this.db.collection('users').add({name}).then(result => {
      this.self = {
        name: name,
        id: result.id
      };
      return result;
    });
  }

  getUsers() {
    return this.db.collection('users').valueChanges();
  }
}
