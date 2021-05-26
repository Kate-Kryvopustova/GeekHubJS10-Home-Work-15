import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { STATES } from '../../data/states';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})

export class StatesComponent {

  states$ = new Observable(observer => {
    observer.next(STATES);
    observer.complete();
  });
}
