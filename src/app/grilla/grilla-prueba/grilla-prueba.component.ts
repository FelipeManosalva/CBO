import { Component, OnInit } from '@angular/core';
import { DataAPiService } from '../../../services/data-api.service';
import {BookInterface} from '../../../app/models/book-interface';

@Component({
  selector: 'app-grilla-prueba',
  templateUrl: './grilla-prueba.component.html',
  styleUrls: ['./grilla-prueba.component.css']
})
export class GrillaPruebaComponent implements OnInit {

  constructor(private dataApi: DataAPiService) { }
  private books : BookInterface; 
  
  ngOnInit() {
    this.getListBooks();
  }
  getListBooks()
  {
   this.dataApi.getAllBooks()
   .subscribe((books: BookInterface) => (this.books=books));
    
  }
}
