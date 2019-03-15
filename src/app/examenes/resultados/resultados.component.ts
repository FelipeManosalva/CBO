import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { FeriadosInterface } from 'src/app/models/book-interface';
import { DataAPiService } from 'src/services/data-api.service';
import {Table2Excel} from '../../../../node_modules/table2excel';
import {TableToExcel} from '../../../../node_modules/table-to-excel';

declare let jsPDF;
declare var $:any;
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  
  excel()
  {    
    

const table2excel = new Table2Excel({
  exclude: ".noExl",
  
    name: "Excel Document Name",
    filename: "myExcelFile.xls",
    fileext: ".xls",
    exclude_img: true,
    exclude_links: true,
    exclude_inputs: true
});

table2excel.export(document.querySelector('contenido'));
}
    
   
  
  

  generarPDF(){
    
    const doc = new jsPDF();
  
    doc.autoTable({
    margin: {top: 25},
    theme:'grid',
    html: '#contenido'
    });
    
    doc.text(90, 20, 'PACIENTES');
    doc.save('pacientes.pdf');
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
