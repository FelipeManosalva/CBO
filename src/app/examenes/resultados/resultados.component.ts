import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { FeriadosInterface } from 'src/app/models/book-interface';
import { DataAPiService } from 'src/services/data-api.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

declare var xepOnline:any;

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  
  generarPDF(){
    html2canvas(document.getElementById('contenido'), {
       // Opciones
       allowTaint: true,
       useCORS: false,
       // Calidad del PDF
       scale: 1
    }).then(function(canvas) {
    var img = canvas.toDataURL("image/png");
    var doc = new jsPDF();
    doc.addImage(img,'PNG',7, 20, 195, 105);
    doc.save('postres.pdf');
   });
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