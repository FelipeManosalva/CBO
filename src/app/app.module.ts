import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { RegistroFormComponent } from './Login/registro-form/registro-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GrillaPruebaComponent } from './grilla/grilla-prueba/grilla-prueba.component';
import { NavbarCboComponent } from './navbar/navbar-cbo/navbar-cbo.component';
import { ResultadosComponent } from './examenes/resultados/resultados.component';

//service
import { DataAPiService } from 'src/services/data-api.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroFormComponent,
    GrillaPruebaComponent,
    NavbarCboComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [DataAPiService, HttpClientModule],
  bootstrap: [AppComponent],
  entryComponents: [RegistroFormComponent],

})
export class AppModule { }
