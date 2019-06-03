import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private matricula: string;
  private senha: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _serviceLogin: UsuariosServiceProvider, 
    private _alertCtrl: AlertController) { }

  login() {
    let matricula = this.matricula;
    let senha = this.senha;
    this._serviceLogin.efetuarLogin(matricula, senha).subscribe(
        (usuario) => {
          if(usuario == null) {
            this._alertCtrl.create({
              title: 'Falha login',
              subTitle: 'E-mail e/ou senha incorretos!',
              buttons: [
                {
                  text: 'Ok'
                }
              ]
            }).present();
          } else {
            
            this.navCtrl.push(TabsPage, { usuarioLogado: usuario});
          }
        },
        (error) => {
          this._alertCtrl.create({
            title: 'Falha login',
            subTitle: 'E-mail e/ou senha incorretos!',
            buttons: [
              {
                text: 'Ok'
              }
            ]
          }).present();
        }
    );
  }
}
