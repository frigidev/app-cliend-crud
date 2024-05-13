import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class RandomString {
    generateRandomId(): string {
        let id = ''

        const characters = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789"

        const control = characters.length;
        
        for(let i=0; i<control; i++){
            id += characters.charAt(Math.floor(Math.random() * control));
        }

        return id
    }
}