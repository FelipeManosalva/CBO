import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { FeriadosInterface } from 'src/app/models/book-interface';
import { DataAPiService } from 'src/services/data-api.service';
import { decode } from 'punycode';
import {token} from '../../../../node_modules/jwt-decode';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  @Input ('datos') book:FeriadosInterface;

  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;
  
  constructor(public dataApi: DataAPiService) { }
  public books: FeriadosInterface;
  
  ngOnInit(): void{
   
    
    this.getListFeriados();
    this.dataTable= $(this.table.nativeElement);
    this.dataTable.dataTable();
  }

  getListFeriados() {
    this.dataApi.getAllFeriados().
    subscribe((books: FeriadosInterface) => (this.books = books));
    
  }
  
  onPreUpdateFeriado (book: FeriadosInterface): void{
    this.dataApi.selectedFeriado = Object.assign({}, book);
  }

  
  
  

}
