import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

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

  public onCardClicked = () => {
    switch (this.type) {
      case CardType.Event:
        if (this.onClick)
          this.onClick.emit(this.type);
        break;
      case CardType.Dynamic:
      case CardType.Servide:
      default:
        break;
    }
  }

  public shouldDisplay = (type): boolean => {
    return this.type == type;
  }
}
