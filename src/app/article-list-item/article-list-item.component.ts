import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../core/models/article';
import { ArticleService } from '../core/services/article.service';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {

  @Input() article: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  favoriteClicked(article: Article) {
    this.articleService.toggleFavorite(article)
      .subscribe(response => this.article = response.article);
  }

}
