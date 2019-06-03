import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Nota } from '../../app/models/nota';


@Component({
  selector: 'page-consultar',
  templateUrl: 'consultar.html',
})
export class ConsultarPage {
  public notaSelecionada: Nota;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notaSelecionada = this.navParams.get('notaSelecionada');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarPage');
  }

}
