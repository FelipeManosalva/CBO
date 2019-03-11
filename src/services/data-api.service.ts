import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http/';
import {Observable} from 'rxjs/internal/Observable';
import {FeriadosInterface} from '../../src/app/models/book-interface';
import { map } from 'rxjs/operators';

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

  public selectedFeriado: FeriadosInterface =  {
  date: "",
  title: '',
  extra:'',
  };

  getAllFeriados()
  {
    const url_api = 'https://feriados-cl-api.herokuapp.com/feriados';
    return this.http.get(url_api);
    
  }
  update(book) {
    // TODO: obtener token
    //const id = book.id;
    //const token = this.authService.getToken();
    //const url_api = `http://localhost:3000/api/books/${bookId}/?access_token=${token}`;
    //return this.http
    //.put<FeriadosInterface>(url_api, book, { headers: this.headers })
    //.pipe(map(data => data));
  }
}

