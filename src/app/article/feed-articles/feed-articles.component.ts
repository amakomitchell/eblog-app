import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-feed-articles',
  templateUrl: './feed-articles.component.html',
  styleUrls: ['./feed-articles.component.css']
})
export class FeedArticlesComponent implements OnInit {

  articles = [];
    paging = {
      offset: 0,
      limit: 5
    };

    // pager = {};
    // pageOfItems = [];

    constructor(
      private articleService: ArticleService,
      private route: ActivatedRoute
    ) { }

    ngOnInit() {
      this.loadFeed();

    }

    private loadFeed() {
      const { offset, limit } = this.paging;

      this.articleService.getFeed(offset, limit)
      .subscribe(articles => this.articles = articles.articles);
    }

}
