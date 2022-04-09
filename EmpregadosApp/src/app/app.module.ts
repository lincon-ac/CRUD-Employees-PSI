import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmpregadosService } from './empregados.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { EmpregadosComponent } from './components/empregados/empregados.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpregadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule,EmpregadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
