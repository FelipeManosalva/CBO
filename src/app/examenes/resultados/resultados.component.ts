import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { FeriadosInterface } from 'src/app/models/book-interface';
import { DataAPiService } from 'src/services/data-api.service';

declare let jsPDF
declare var $:any;
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  generarPDF(){
    
    const doc = new jsPDF();
    doc.autoTable({html: '#contenido'});
    doc.save('table.pdf');
  }

  @Input ('datos') book:FeriadosInterface;
  @ViewChild('datatable') content :  ElementRef;
  datatable: any;
  
  constructor(public dataApi: DataAPiService) { }
  
  public books: FeriadosInterface;
  public ngOnInit(): void{
  this.getListFeriados();
  this.datatable= $(this.datatable.nativeElement);
   this.datatable.dataTable();
  }
  getListFeriados() {
    this.dataApi.getAllFeriados().
    subscribe((books: FeriadosInterface) => (this.books = books));
  }
  onPreUpdateFeriado (book: FeriadosInterface): void{
    this.dataApi.selectedFeriado = Object.assign({}, book);
  }
  
}
