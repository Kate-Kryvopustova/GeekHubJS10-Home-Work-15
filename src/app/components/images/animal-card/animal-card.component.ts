import { Component, Input, OnInit } from '@angular/core';

import { IAnimal } from '../../../interfaces/animal';
import { HttpService } from '../../../../services/api/http.service';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css'],
  providers: [HttpService],
})
export class AnimalCardComponent implements OnInit {
  @Input() animal: IAnimal;

  constructor( private httpService: HttpService ) { }

  ngOnInit(): void {
    this.httpService
      .getAnimalImage(this.animal.urlCode)
      .subscribe((data) => {
        this.animal.imageLink = data.link;
      });
  }

  getInfoAboutAnimal(): void {
    this.httpService
      .getAnimalFact(this.animal.urlCode)
      .subscribe((data) => {
        this.animal.info = data.fact;
      });
  }

}
