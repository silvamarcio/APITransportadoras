import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransportadoraComponent} from './transportadora/transportadora.component';
import {TransporteDetalhesComponent} from './transporte-detalhes/transporte-detalhes.component';

const routes: Routes = [
  {path: 'transportadora', component: TransportadoraComponent},
  {path: 'detalhes/:id', component: TransporteDetalhesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
