import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { BoletimPage } from '../boletim/boletim';
import { FeedPage } from '../feed/feed';
import { SobrePage } from '../sobre/sobre';


@Component({
  
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BoletimPage;
  tab2Root = AboutPage;
  tab3Root = SobrePage;
  tab4Root = FeedPage;
  constructor() {}
}
