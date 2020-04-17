import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor( private http: HttpClient ) { }

    getArticles(offset: number, limit: number, tag?: string) {
        return this.http.get<any>(`${environment.apiUrl}/articles?offset=${offset}&limit=${limit}${tag && '&tag=' + tag}`);
    }

    getFeed(offset: number, limit: number) {
        return this.http.get<any>(`${environment.apiUrl}/articles/feed/?offset=${offset}&limit=${limit}`);
    }

    getArticleBySlug(slug: string) {
        return this.http.get<any>(`${environment.apiUrl}/articles/${slug}`);
    }

    getAllTags() {
        return this.http.get<any>(`${environment.apiUrl}/tags`);
    }

    toggleFavorite(article: Article): Observable<any> {
        const url = `${environment.apiUrl}/articles/${article.slug}/favorite`;
        let apiFunction: Function;

        if (article.favorited) {
            return this.http.delete(url);
        } else {
            return this.http.post(url, {});
        }
    }

    createArticle(article: Article) {
        return this.http.post<any>(`${environment.apiUrl}/articles`, { article });
    }
}
