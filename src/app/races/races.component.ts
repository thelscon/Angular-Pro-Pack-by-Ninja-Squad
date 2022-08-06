import { Component } from '@angular/core';
// import { Observable } from 'rxjs';

import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent {
  races!: RaceModel[];

  constructor(private raceService: RaceService) {
    this.raceService.list().subscribe(value => (this.races = value));
  }
}
