import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, App } from 'ionic-angular';
import { RestStorage } from  '../../providers/rest/storage';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  paginas = [];
  usuario = '';

  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public restStorage: RestStorage, private appCtrl: App) {
  }

  ionViewWillEnter()
  {

    if(this.restStorage.getStatus())
    {
        this.paginas = [
        { title: 'Home', page: 'HomePage', icon: 'home'}
      ];
      this.openPage('Home');
    }else {
        this.paginas = [
        { title: 'Home', page: 'HomePage', icon: 'home'}
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
