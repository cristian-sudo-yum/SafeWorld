import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestStorage } from '../providers/rest/storage';
import { Events } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { CanjeaPremioPage } from '../pages/canjea-premio/canjea-premio';
import { ComienzaAReciclarPage } from '../pages/comienza-a-reciclar/comienza-a-reciclar';
import { EncuentraContenedorPage } from '../pages/encuentra-contenedor/encuentra-contenedor';
import { InfoResiduosPage } from '../pages/info-residuos/info-residuos';
import { TipsParaPlantarPage } from '../pages/tips-para-plantar/tips-para-plantar';
import { VideosEducativosPage } from '../pages/videos-educativos/videos-educativos';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { MapScanPage } from '../pages/map-scan/map-scan';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public events: Events, public platform: Platform, public restStorage: RestStorage, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

          this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'List', component: ListPage },
        { title: '¡Comienza a reciclar!', component: ComienzaAReciclarPage },
        { title: '¡Lo que debes saber para comenzar a plantar!', component: TipsParaPlantarPage },
        { title: '¡Veamos un video educativo!', component: VideosEducativosPage },
        { title: '¡Informate acerca de los residuos!', component: InfoResiduosPage },
        { title: '¡Encuentra un contenedor de basura cerca!', component: EncuentraContenedorPage },
        { title: '¡Canjea tu premio!', component: CanjeaPremioPage },
        { title: 'Ajustes', component: AjustesPage },
        { title: 'LoginPage', component: LoginPage },
        { title: 'RegistroPage', component: RegistroPage }
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
