import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ArticleService } from '../core/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  tags = [];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.loadTags();
  }

  private loadTags() {
    this.articleService.getAllTags()
    .pipe(first())
    .subscribe(tags => this.tags = tags.tags);
  }

}
