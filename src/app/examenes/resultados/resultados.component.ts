import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { FeriadosInterface } from 'src/app/models/book-interface';
import { DataAPiService } from 'src/services/data-api.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  @Input ('datos') book:FeriadosInterface;

  @ViewChild('datatable') content :  ElementRef;
  datatable: any;
  
  constructor(public dataApi: DataAPiService) { }
  public books: FeriadosInterface;
  
  ngOnInit(): void{
   
    
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
 genPDF()
 {
   html2canvas(document.body,{
     onrendered : function (canvas){
     var img= canvas.toDataURL("assets/img")
     var doc = new jsPDF();
     doc.addImage(img, 'JPEG',20,20);      
     doc.save('test pdf');
  }}
    );
 }
 
}