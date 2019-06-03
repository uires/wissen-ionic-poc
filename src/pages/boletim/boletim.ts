import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Nota } from '../../app/models/nota';
import { ConsultarPage } from '../consultar/consultar';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';

@Component({
  selector: 'page-boletim',
  templateUrl: 'boletim.html'
})
export class BoletimPage {
  
  public notas: Nota[];

  constructor(
    public navCtrl: NavController,     
    private _usuarioServiceProvaider: UsuariosServiceProvider,
    private _http: HttpClient
  ) {    
  }

  get usuarioLogado() {

    return this._usuarioServiceProvaider.obtemUsuarioLogado();
  }

  
  ionViewDidLoad() {

    console.log('ionViewDidLoad FeedPage');
    this._getNotas();
  }

  selecionarNota(nota: Nota) {

    this.navCtrl.push(ConsultarPage, {
      notaSelecionada: nota
    })
  }

  _getNotas(){

    this._http.get<Nota[]>('https://localhost:5001/api/nota/' + this.usuarioLogado.codigo)
      .subscribe((notas) => {
        this.notas = notas;
      }
    );
  }
}
