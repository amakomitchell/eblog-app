import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './core/interceptors';
import { FeedArticlesComponent } from './article/feed-articles/feed-articles.component';
import { GlobalArticleComponent } from './article/global-article/global-article.component';
import { ArticleComponent } from './article/article.component';
import { ArticleExtensionComponent } from './article/article-extension/article-extension.component';
import { EditorComponent } from './editor/editor.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'feed-articles', component: FeedArticlesComponent, canActivate: [AuthGuard] },
  { path: '', component: ArticleComponent, children: [
    {
      path: '',
      component: GlobalArticleComponent,
    },
  ]},
  { path: 'read-more/:slug', component: ArticleExtensionComponent },
  { path: 'create-article', component: EditorComponent },
  { path: 'settings', component: SettingsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
