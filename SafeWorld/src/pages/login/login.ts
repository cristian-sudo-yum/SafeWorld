import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { RestProvider } from  '../../providers/rest/rest';
import { RestStorage } from  '../../providers/rest/storage';
import { HomePage } from '../home/home'
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:string;
  contrasena:string;
  persona:any;

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public restStorage: RestStorage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login()
  {
    this.restProvider.post("ObtenerUsuario",{usuario: this.usuario, contrasena: this.contrasena})
    .subscribe(
      (data)=>{this.persona = data;},
      (error)=>{this.persona = error; console.log(error);}
    )

    let TIME_IN_MS = 2000;
    setTimeout( () => {
      if(this.persona.status == "success" && this.persona.mensaje != "NoData")
      {
        console.log("Logueaste: " + this.persona.mensaje[0].usuario);
        this.restStorage.setUser(this.persona.mensaje[0].usuario);
        this.navCtrl.push(HomePage)
        .then(() => {
          this.navCtrl.setRoot(HomePage);
          this.navCtrl.popToRoot();
        });
      }
      else
      {
        console.log("No existes");
      }
    }, TIME_IN_MS);
  }
}
