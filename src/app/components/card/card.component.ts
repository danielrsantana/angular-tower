import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

export enum CardType {
  Dynamic = 'dynamic',
  Event = 'event',
  Servide = 'service',
}

@Component({
  selector: 'tower-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string;
  @Input() type: string;
  @Output() onClick = new EventEmitter<string>();

  constructor(private cardService: CardService) {
  }

  public onCardClicked = () => {
    switch (this.type) {
      case CardType.Event:
        if (this.onClick)
          this.onClick.emit(this.type);
        break;
      case CardType.Servide:
        this.cardService.setMessage(this.type);
        break;
      case CardType.Dynamic:
      default:
        break;
    }
  }

  public shouldDisplay = (type): boolean => {
    return this.type == type;
  }
}
