import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = '69e02a4acd0c0dd5747eb8d7543ffc77'
  HASH = '3b1eb7aacf25d786062263ec55e64557'

  URL_API = 'https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b'

  constructor(private http: HttpClient) { }

  getAllCharacteres(): Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }

}
