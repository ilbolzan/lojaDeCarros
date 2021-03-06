import { Component } from '@angular/core';
import { VeiculoService } from './services/veiculo.service';
import { Categoria, IVeiculo, categoriaEnum, VeiculoParaVenda, Usuario, PerfilUsuarioEnum } from './shared/models';
import { UsuarioService } from './services/usuario.service';
import { AuthService } from './authentication/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tituloTopo = 'Loja Virtual';
  // listaVeiculos: VeiculoParaVenda[];
  // clientes: Usuario[];

  constructor(private _authService: AuthService, private usuarioService: UsuarioService) {
    // this.getVeiculosParaVenda();
  }

  isPerfilAdmin() {
    return this._authService.getProfile() === PerfilUsuarioEnum.ADMINISTRADOR;
  }

  // // métodos criados temporariamente para teste
  // comprarVeiculo() {
  //   this.veiculosService.comprarVeiculo(this.listaVeiculos[0], this.clientes[0], 'ASD-1234')
  //     .subscribe(resultadoCompra => console.log(resultadoCompra));
  // }

  // getVeiculosParaVenda() {
  //   this.veiculosService.getVeiculos(categoriaEnum.CARRO)
  //     .subscribe((veiculos: VeiculoParaVenda[]) => {
  //       this.listaVeiculos = veiculos;
  //       console.log('listaVeiculosParaVenda', veiculos);
  //       // this.getClientes();

  //     });
  // }

  // getClientes() {
  //   this.usuarioService.getUsuarios()
  //     .subscribe((usuarios: Usuario[]) => {
  //       this.clientes = usuarios.filter(usuario => usuario.perfil === PerfilUsuarioEnum.CLIENTE);
  //       this.comprarVeiculo();
  //     });
  // }


}
