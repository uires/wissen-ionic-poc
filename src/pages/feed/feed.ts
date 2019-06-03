import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Noticia } from '../../app/models/noticia';
import { FeedServiceProvider } from '../../providers/feed-service/feed-service';


@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  public noticias: Noticia[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _serviceNoticia: FeedServiceProvider,
    private _alertCtrl: AlertController) { }

  ionViewWillEnter() {
    
    this.listarNoticias();
  }

  listarNoticias(){

    this._serviceNoticia.buscarNoticias()
      .subscribe(
        (noticias) => {
          
          this.noticias = noticias;
        }, 
        (error) => {

          this._alertCtrl.create({
            title: 'Nao foi possivel buscar os dados',
            subTitle: error,
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
