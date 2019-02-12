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
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegistroFormComponent],
})
export class AppModule { }
