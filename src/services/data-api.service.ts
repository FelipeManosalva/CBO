import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http/';
import {Observable} from 'rxjs/internal/Observable';
import {BookInterface} from '../../src/app/models/book-interface';
@Injectable({
  providedIn: 'root'
})
export class DataAPiService {

  constructor(private http: HttpClient) {}
  books: Observable<any>;
  book: Observable<any>;
  getAllBooks()
  {
    const url_api = 'https://chilealerta.com/api/query/?user=demo&select=ultimos_sismos&limit=50&country=Chile';
    return this.http.get(url_api);
    
  }
}
