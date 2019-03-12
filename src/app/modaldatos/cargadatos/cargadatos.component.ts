import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DataAPiService } from '../../../services/data-api.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import {Location} from '@angular/common';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';


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
      doc.text(90, 20, 'MODAL PDF');
      doc.addImage(img,'PNG',7, 40, 195, 110);
      doc.save('datosmodal.pdf');
      
   });
}
  constructor(
    public dataApi: DataAPiService, 
    public location: Location,
    public toastr: ToastrService
     ){
      
     }
  
    Toast()
    {
      this.toastr.success('Datos guardados correctamente','Actualización');
    }
  

     update(formFeriado: NgForm): void {
        // error subscribe
        //this.dataApi.update(formFeriado.value).subscribe(book => location.reload());
        this.Toast();
        setTimeout(()=>
        {
          location.reload();
      },2000);
      }
   
  ngOnInit() { 
  }
 
}
