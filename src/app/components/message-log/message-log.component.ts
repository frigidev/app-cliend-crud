import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-message-log',
  templateUrl: './message-log.component.html',
  styleUrls: ['./message-log.component.css']
})
export class MessageLogComponent {
  constructor(public messagesService: MessagesService){}

  clear(): void {
    this.messagesService.messages = [];
  }

}