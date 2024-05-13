import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MessagesService {
    message(message: string): string {
        const returnMessage = `Crud app - ${message}`
        this.messages.push( `Crud app - ${message}`);
        return returnMessage
    }

    messages: Array<string> = [];
}