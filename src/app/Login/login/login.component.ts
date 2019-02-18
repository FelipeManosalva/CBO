import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { RegistroFormComponent } from '../registro-form/registro-form.component';

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
Registro()
{
const modal = this.modalService.open(RegistroFormComponent);
}

}
