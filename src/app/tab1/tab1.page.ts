import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items: Observable<any[]>;
  message = '';

  @ViewChild('content', { static: false }) content;

  constructor(private messageService: MessageService) {
    this.items = this.messageService.getMessages().pipe(tap(_ => {
      this.content && this.content.scrollToBottom(100);
    }));
  }

  sendMessage() {
    this.messageService.sendMessage(this.message);
    this.message = '';
  }

}
