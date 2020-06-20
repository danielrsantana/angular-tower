import { Component } from '@angular/core';
import { CardType } from './card/card.component';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'angular-tower';
  public dynamicCardMessage: string = '';
  public eventCardMessage: string = '';
  public serviceCardMessage: string = '';

  constructor(private cardService: CardService) {
    this.cardService.getMessage().subscribe(message => {
      this.onCardClicked(message)
    });
  }

  public onCardClicked(message: string) {
    switch (message) {
      case CardType.Event:
        this.eventCardMessage = !this.eventCardMessage ? message : '';
        break;
      case CardType.Servide:
        this.serviceCardMessage = !this.serviceCardMessage ? message : '';
        break;
      case CardType.Dynamic:
      default:
        break;
    }
  }
}
