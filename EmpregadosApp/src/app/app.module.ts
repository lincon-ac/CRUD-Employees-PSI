import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmpregadosService } from './empregados.service';
import { CommonModule } from '@angular/common'; //Vamos usar comandos IF no HTML
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms'; //Formulários
import { ModalModule } from "ngx-bootstrap/modal"; //Exibir modais de erro
import { EmpregadosComponent } from './components/empregados/empregados.component'; 

@NgModule({
  declarations: [
    AppComponent,
    EmpregadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Registrar imports adicionados
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    //Modal será registrado para a aplicação inteira
    ModalModule.forRoot()
  ],
  //O que será inicializado via injeção de dependência
  providers: [HttpClientModule, EmpregadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
