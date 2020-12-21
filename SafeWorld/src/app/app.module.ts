import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyApp } from './app.component';
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
import { QRScanner } from '@ionic-native/qr-scanner';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { RestStorage } from '../providers/rest/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AjustesPage,
    CanjeaPremioPage,
    ComienzaAReciclarPage,
    EncuentraContenedorPage,
    InfoResiduosPage,
    TipsParaPlantarPage,
    VideosEducativosPage,
    LoginPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AjustesPage,
    CanjeaPremioPage,
    ComienzaAReciclarPage,
    EncuentraContenedorPage,
    InfoResiduosPage,
    TipsParaPlantarPage,
    VideosEducativosPage,
    LoginPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    RestStorage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
