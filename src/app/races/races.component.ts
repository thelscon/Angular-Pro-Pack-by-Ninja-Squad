import { Component } from '@angular/core';

import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent {
  races: RaceModel[];

  constructor(private raceService: RaceService) {
    this.races = this.raceService.list();
  }
}
