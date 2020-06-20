import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CardService {
    private message: BehaviorSubject<string> = new BehaviorSubject('');

    public getMessage(): Observable<string> {
        return this.message;
    }

    public setMessage(message): void {
        this.message.next(message);
    }
}