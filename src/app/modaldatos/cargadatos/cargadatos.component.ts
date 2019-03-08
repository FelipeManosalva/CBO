import { Component, OnInit } from '@angular/core';
import { DataAPiService } from '../../../services/data-api.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cargadatos',
  templateUrl: './cargadatos.component.html',
  styleUrls: ['./cargadatos.component.css']
})
export class CargadatosComponent implements OnInit {
  form: FormGroup;

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
    public location: Location,
    public fb : FormBuilder )
    
  {
this.formControlls();
  }
  formControlls()
  {
    this.form = this.fb.group({
        desc:'',

    })

  }

  Guardar()
  {
       
  }
  ngOnInit() {
  }

}
