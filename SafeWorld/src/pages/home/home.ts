import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scanSubscription;

  constructor(public navCtrl: NavController, private qrScanner: QRScanner, private toastCtrl: ToastController) {

  }

  scan() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
          this.qrScanner.show();
          this.scanSubscription = this.qrScanner.scan().subscribe((text:string) => {
            let toast = this.toastCtrl.create({
              message: `${text}`,
              position: 'top',
              duration: 3000,
              closeButtonText: 'OK'
            });
            toast.present();
          });
        } else {
          console.error('Permission Denied', status);
        }
      })
      .catch((e: any) => {
        console.error('Error', e);
      });
  }
  
 
}
