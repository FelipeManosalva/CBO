import { Component, OnInit } from '@angular/core';
import { DataAPiService } from '../../../services/data-api.service';

import {Location} from '@angular/common';

@Component({
  selector: 'app-cargadatos',
  templateUrl: './cargadatos.component.html',
  styleUrls: ['./cargadatos.component.css']
})
export class CargadatosComponent implements OnInit {

  constructor(
    private dataApi: DataAPiService, 
    private location: Location)
  {

  }

  ngOnInit() {
  }

}
