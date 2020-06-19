import { Component } from '@angular/core';
import { CardType } from './card/card.component';

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

  public onCardClicked(message: string) {
    switch (message) {
      case CardType.Event:
        this.eventCardMessage = !this.eventCardMessage ? message : '';
        break;
      case CardType.Dynamic:
      case CardType.Servide:
      default:
        break;
    }
  }
}
