import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { IWhiteBear } from '../../interfaces/bear';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  page = 1;
  topics$: Observable<IWhiteBear[]>;

  constructor(
    private router: Router,
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.topics$ = this.listService.getAll();
  }


  goToItems(id: string): void {
    this.router.navigate([`/topic/${id}`]);
  }

}
