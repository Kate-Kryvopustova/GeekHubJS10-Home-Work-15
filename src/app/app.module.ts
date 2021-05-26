import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TopicComponent } from './components/articles-list/topic/topic.component';
import { UsersComponent } from './components/users/users.component';
import { StatesComponent } from './components/states/states.component';
import { ImagesComponent } from './components/images/images.component';
import { AnimalCardComponent } from './components/images/animal-card/animal-card.component';
import { ApiInterceptor } from '../services/api/api-interceptor';
import { HttpService } from '../services/api/http.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    HomeComponent,
    HeaderComponent,
    TopicComponent,
    UsersComponent,
    StatesComponent,
    ImagesComponent,
    AnimalCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    ScrollingModule,
    NgxPaginationModule
  ],
  providers: [
    HttpService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
