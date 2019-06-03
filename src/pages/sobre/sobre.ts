import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioComplexo } from '../../app/models/usariocomplexo';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';

@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {
  
  public itens: UsuarioComplexo[];

  constructor(
    public navCtrl: NavController,     
    private _usuarioServiceProvaider: UsuariosServiceProvider
  ) {    
  }

  get usuarioLogado() {

    return this._usuarioServiceProvaider.obtemUsuarioLogado();
  }

}
