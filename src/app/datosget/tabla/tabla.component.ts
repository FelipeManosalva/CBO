import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataAPiService } from '../../../services/data-api.service';
import { FeriadosInterface } from '../../../app/models/book-interface';

declare var $;
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  
  @ViewChild('tabladatos')
  table: ElementRef;
  tabladatos: any;
  constructor(private dataApi: DataAPiService) { }
  private books: FeriadosInterface;
  ngOnInit() {
    this.getListFeriados();
    this.tabladatos = $(this.table.nativeElement);
    this.tabladatos.tabladatos();
  }
  
  getListFeriados() {
    this.dataApi.getAllFeriados()
      .subscribe((books: FeriadosInterface) => (this.books = books));
  }

}
