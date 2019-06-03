import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { BoletimPage } from '../pages/boletim/boletim';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { ConsultarPage } from '../pages/consultar/consultar';
import { ConsultarPageModule } from '../pages/consultar/consultar.module';
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';
import { FeedServiceProvider } from '../providers/feed-service/feed-service';
import { SobrePage } from '../pages/sobre/sobre';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SobrePage,
    BoletimPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    HttpClientModule,
    ConsultarPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SobrePage,
    BoletimPage,
    TabsPage,
    LoginPage,
    ConsultarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosServiceProvider,
    FeedServiceProvider
  ]
})
export class AppModule {}
