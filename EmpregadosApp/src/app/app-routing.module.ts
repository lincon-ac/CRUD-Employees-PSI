import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpregadosComponent } from './components/empregados/empregados.component';

const routes: Routes = [{
  path: 'empregados', component: EmpregadosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
