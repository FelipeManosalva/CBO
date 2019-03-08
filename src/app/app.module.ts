import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { RegistroFormComponent } from './Login/registro-form/registro-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarCboComponent } from './navbar/navbar-cbo/navbar-cbo.component';
import { ResultadosComponent } from './examenes/resultados/resultados.component';
import {DataTablesModule} from 'angular-datatables';
import { Puntos } from './pipes/puntos.pipe';
//service
import { DataAPiService } from 'src/services/data-api.service';
import {HttpClientModule} from '@angular/common/http';
import { TablaComponent } from './datosget/tabla/tabla.component';
import { CargadatosComponent } from './modaldatos/cargadatos/cargadatos.component';

const appRoutes: Routes=[
  {path: '',component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: 'tabla', component: TablaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroFormComponent,
    NavbarCboComponent,
    ResultadosComponent,
    TablaComponent,
    CargadatosComponent,
    Puntos
  ],
    exports: [RouterModule],

    imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    DataTablesModule,
   
  ],
  providers: [DataAPiService, HttpClientModule],
  bootstrap: [AppComponent],
  entryComponents: [RegistroFormComponent],

})
export class AppModule { }
