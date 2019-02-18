import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http/';
import {Observable} from 'rxjs/internal/Observable';
import {BookInterface} from '../../src/app/models/book-interface';
@Injectable({
  providedIn: 'root'
})
export class DataAPiService {

  constructor(private http: HttpClient) {}
  headers : HttpHeaders = new HttpHeaders(
    {
      "Content-Type": "aplication/json",

    }
  )
  books: Observable<any>;
  book: Observable<any>;

  getAllBooks()
  {
    const url_api = 'https://feriados-cl-api.herokuapp.com/feriados';
    return this.http.get(url_api);
    
  }
}
