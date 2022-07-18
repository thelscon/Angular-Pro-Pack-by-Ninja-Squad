import { Component, Input } from '@angular/core';
import { PonyModel } from '../models/pony.model';

import { RaceModel } from '../models/race.model';

@Component({
  selector: 'pr-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent {
  @Input() raceModel!: RaceModel;

  clicked(value: PonyModel): void {}
}
