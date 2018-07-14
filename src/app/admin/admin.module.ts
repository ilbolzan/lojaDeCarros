import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
  ],
  declarations: [DashboardComponent, ListarClientesComponent, DetalhesClienteComponent]
})
export class AdminModule { }
