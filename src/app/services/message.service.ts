import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private db: AngularFirestore, private userService: UserService) { }

  sendMessage(message: string) {
    this.db.collection('messages').add({
      text: message,
      sender: this.userService.self,
      date: new Date().toString()
    });
  }

  getMessages() {
    return this.db.collection('messages').valueChanges();
  }
}
