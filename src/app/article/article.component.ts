import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ArticleService } from '../core/services/article.service';
import { AuthenticationService } from '../core/services';
import { Router } from '@angular/router';

export interface Tab {
  slug: string;
  title?: string;
  requiresAuth?: boolean;
  selected?: boolean;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private defaultTabs: Tab[] = [{
    slug: 'your-feed',
    title: 'Your Feed',
    requiresAuth: true,
  }, {
    slug: 'global-feed',
    title: 'Global Feed',
  }]
  tabs: Tab[] = [...this.defaultTabs];

  activeTab: Tab;

  tags = [];

  constructor(
    private articleService: ArticleService,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    const defaultTabSelection = this.defaultTabs[1];
    defaultTabSelection.selected = true;

    this.activeTab = defaultTabSelection;

    this.loadTags();
  }

  private loadTags() {
    this.articleService.getAllTags()
      .subscribe(tags => this.tags = tags.tags);
  }

  tabSelected(tab: Tab) {
    if (tab.slug !== this.activeTab.slug) {

      if (tab.requiresAuth && !this.authService.isLoggedIn) {
        return this.router.navigate(['/login']);
      }

      this.activeTab.selected = false;
      tab.selected = true;
      this.activeTab = tab;
    }
  }

  activateTag(tag: string) {
    const existingTabIndex = this.tabs.findIndex(tab => tab.slug === tag);

    if (existingTabIndex === -1) {
      const newTab: Tab = { slug: tag };
      this.tabs.push(newTab);
      this.tabSelected(newTab)
    } else {
      const existingTab = this.tabs[existingTabIndex];
      this.tabSelected(existingTab);
    }
  }

}
