import { Component, OnInit } from '@angular/core';
import { DataAPiService } from '../../../services/data-api.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cargadatos',
  templateUrl: './cargadatos.component.html',
  styleUrls: ['./cargadatos.component.css']
})
export class CargadatosComponent implements OnInit {
  PDF(){
    html2canvas(document.getElementById('contenidomodal'), {
      allowTaint: true,
      useCORS: false,
      scale: 1
      }).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img,'PNG',50, 20, 110, 110);
      doc.save('datosmodal.pdf');
   });
}
  constructor(
    public dataApi: DataAPiService, 
    public location: Location)
  {

  }

  ngOnInit() {
  }

}
