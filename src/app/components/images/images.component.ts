import { Component } from '@angular/core';
import { Animals } from '../../data/animals';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent {
  animals = Animals;
}
