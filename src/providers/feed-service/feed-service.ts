import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../../app/models/noticia';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedServiceProvider {

  constructor(private _http: HttpClient) { }

  buscarNoticias(): Observable<Noticia[]> {

    return this._http.get<Noticia[]>('https://localhost:5001/api/noticia');
  }
}
