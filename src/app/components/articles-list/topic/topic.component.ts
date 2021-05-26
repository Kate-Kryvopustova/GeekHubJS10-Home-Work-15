import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IWhiteBear } from '../../../interfaces/bear';
import { ListService } from '../../../../services/list.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topic: IWhiteBear;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listService: ListService
  ) { }

  ngOnInit(): void {
    const topicId = this.route.snapshot.paramMap.get('id');
    this.topic = this.listService.getOne(topicId);
  }

  back(): void {
    this.router.navigate(['/articles-list']);
  }
}
