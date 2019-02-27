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

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
    this.token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';    
  }
Registro()
{
const modal = this.modalService.open(RegistroFormComponent);
}
getDecodedAccessToken(token: string): any {
  try{
      return jwt_decode(token);
  }
  catch(Error){
      return null;
  }
}

funcion(){
let tokenInfo = this.getDecodedAccessToken(token); // decode token
let expireDate = tokenInfo.exp; // get token expiration dateTime
console.log(tokenInfo); // show decoded token object in console
}

}
