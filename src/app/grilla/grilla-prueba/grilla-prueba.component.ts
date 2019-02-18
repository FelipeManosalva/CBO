import { Component, OnInit } from '@angular/core';
import { DataAPiService } from '../../../services/data-api.service';
import {FeriadosInterface} from '../../../app/models/book-interface';

@Component({
  selector: 'app-grilla-prueba',
  templateUrl: './grilla-prueba.component.html',
  styleUrls: ['./grilla-prueba.component.css']
})
export class GrillaPruebaComponent implements OnInit {

  constructor(private dataApi: DataAPiService) { }
  private books : FeriadosInterface; 
  
  ngOnInit() {
    this.getListFeriados();
  }
  getListFeriados()
  {
   this.dataApi.getAllFeriados()
   .subscribe((books: FeriadosInterface) => (this.books=books));
    
  }
}
