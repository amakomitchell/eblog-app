import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from 'src/app/core/services/article.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-extension',
  templateUrl: './article-extension.component.html',
  styleUrls: ['./article-extension.component.css']
})
export class ArticleExtensionComponent implements OnInit, OnDestroy {
  @Input() slug: string;
  article: {};
  queryParamSubscription: Subscription;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    this.queryParamSubscription = this.route.params.subscribe(
      params => this.slug = params['slug']
    );
  }

  ngOnInit() {
    this.loadGlobalArticleBySlug();

  }

  ngOnDestroy() {
    this.queryParamSubscription.unsubscribe();
  }

  private loadGlobalArticleBySlug() {
    this.articleService.getArticleBySlug(this.slug)
    .subscribe(result => this.article = result.article);
  }

}
