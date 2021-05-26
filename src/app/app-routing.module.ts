import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { TopicComponent } from './components/articles-list/topic/topic.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UsersComponent } from './components/users/users.component';
import { StatesComponent } from './components/states/states.component';
import { ImagesComponent } from './components/images/images.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'articles-list', component: ArticlesListComponent},
  { path: 'topic/:id', component: TopicComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'states', component: StatesComponent },
  { path: 'images', component: ImagesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
