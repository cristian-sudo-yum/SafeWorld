import { Component , ViewChild  } from '@angular/core';
import { IonicPage, NavController, Nav, App } from 'ionic-angular';
import { RestStorage } from  '../../providers/rest/storage';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;
  usuario = '';

  constructor(public navCtrl: NavController, public restStorage: RestStorage, private appCtrl: App) {
  }

  ionViewWillEnter()
  {

    if(this.restStorage.getStatus())
    {
        this.pages = [
        { title: 'Home', component: HomePage },
      ];
      this.openPage('Home');
    }else {
        this.pages = [
        { title: 'Home', component: HomePage },
      ];
      this.openPage('Home');
    }
    this.usuario = this.restStorage.getUser();
  }

    openPage(page)
    {
      this.nav.setRoot(page);
    }

    logout()
    {
      this.restStorage.deleteUser();
      this.appCtrl.getRootNav().setRoot('LoginPage')
    }

    ionViewCanEnter()
    {
      return this.restStorage.getStatus()
    }

}
