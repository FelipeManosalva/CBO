import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DataAPiService } from '../../../services/data-api.service';
import { FeriadosInterface } from '../../../app/models/book-interface';


declare var $;

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  
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
    this.dataApi.getAllFeriados().subscribe((books: FeriadosInterface) => (this.books = books));
    
  }
  
  onPreUpdateFeriado (book: FeriadosInterface): void{
    this.dataApi.selectedFeriado = Object.assign({}, book);
  }

   
}

