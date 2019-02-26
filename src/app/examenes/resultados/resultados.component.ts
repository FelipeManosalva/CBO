import { Component, OnInit, Input} from '@angular/core';
import { FeriadosInterface } from 'src/app/models/book-interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {



  constructor() { }

  @Input ('datos') book:FeriadosInterface;
  
  ngOnInit() {
  }

}
