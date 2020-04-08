import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './core/interceptors';


const routes: Routes = [
  { path: '#', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '#/login', component: LoginComponent },
  { path: '#/register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '#', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
