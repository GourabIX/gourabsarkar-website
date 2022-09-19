import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Message } from '../entities/Message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private fireDatabase: AngularFireDatabase) {}

  saveMessage(message: Message) {
    return this.fireDatabase.list('messages').push(message);
  }
}
