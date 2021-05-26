import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ILoginForm } from '../../app/interfaces/login';
import { IAnimalFact, IAnimalImage } from '../../app/interfaces/requests';

@Injectable()

export class HttpService{

  private postURL = 'http://localhost:4200';
  readonly baseURL = 'https://some-random-api.ml';
  readonly imageURL = 'img';
  readonly factURL = 'facts';

  constructor(private http: HttpClient) { }

  postData(user: ILoginForm): Observable<object> {

    const data = window.btoa(`${ user.email }: ${ user.password }`);
    const decodedData = window.atob(data);

    const headers = new HttpHeaders().set('headers', decodedData);

    return this.http.post(this.postURL, user, { headers });
  }

  getAnimalFact(animal: string): Observable<any>{
    return this.http.get<IAnimalFact>(
      `${ this.baseURL }/${ this.factURL }/${ animal }`
    );
  }

  getAnimalImage(animal: string): Observable<any> {
    return this.http.get<IAnimalImage>(
      `${ this.baseURL }/${ this.imageURL }/${ animal }`
    );
  }
}
