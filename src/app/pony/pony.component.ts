import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'pr-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent {
  @Input() ponyModel!: PonyModel;
  @Output() readonly ponyClicked = new EventEmitter<PonyModel>();

  getPonyImageUrl() {
    switch (this.ponyModel.color) {
      case 'YELLOW':
        return 'assets/images/pony-yellow.gif';
      case 'ORANGE':
        return 'assets/images/pony-orange.gif';
      case 'GREEN':
        return 'assets/images/pony-green.gif';
      case 'BLUE':
        return 'assets/images/pony-blue.gif';
      case 'PURPLE':
        return 'assets/images/pony-purple.gif';
    }
  }

  _ponyClicked() {
    this.ponyClicked.emit(this.ponyModel);
  }
}
