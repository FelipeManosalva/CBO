import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { RegistroFormComponent } from '../registro-form/registro-form.component';
import * as jwt_decode from "../../../../node_modules/jwt-decode";

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
public token:string;

  constructor(public modalService: NgbModal) { 
    
  }

  ngOnInit() {
    this.token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzUyMjIwNCIsInN0YXR1cyI6IkxvZ2luIE9LIiwiYXBlbGxpZG8iOiJydWl6In0.xpRKgE-BWZ_s9uNvsY9bL64bUwYPcoq5fQ6pmrAvPcg8pC8lWAT59SxfA2vrTo8GOepl56zOFERAkxmDT9LSSw';    
    this.decodificarToken();
    this.guardarlocalstorage();
  }
Registro()
{
const modal = this.modalService.open(RegistroFormComponent);
}
decodificar(token: string): any {
  try{
      return jwt_decode(token);
  }
  catch(Error){
      return null;
  }
}
decodificarToken(){
let tokenInfo = this.decodificar(this.token); // decodificar token
let expireDate = tokenInfo.exp; // fehca expiracion
console.log(tokenInfo); // consola

}

guardarlocalstorage(){
  let tokenInfo:string;
  localStorage.setItem("informacion", JSON.stringify(tokenInfo));
  
}
}


