import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor( private http: HttpClient ) { }

    getArticles(offset: number, limit: number, tag?: string) {
        return this.http.get<any>(`${environment.apiUrl}/articles/${tag || ''}?offset=${offset}&limit=${limit}`);
    }

    getFeed(offset: number, limit: number) {
        return this.http.get<any>(`${environment.apiUrl}/articles/feed`);
    }

    getArticleBySlug(slug: string) {
        return this.http.get<any>(`${environment.apiUrl}/articles/${slug}`);
    }

    getAllTags() {
        return this.http.get<any>(`${environment.apiUrl}/tags`);
    }
}
