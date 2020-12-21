import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { ToastController } from 'ionic-angular';


declare var google:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scanSubscription;
  map:any;

  @ViewChild('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController, 
              private qrScanner: QRScanner, 
              private toastCtrl: ToastController) {

  }

  ionViewDidLoad(){
    setTimeout(()=> { this.DisplayMap(); },100);
  }

  DisplayMap(){
    const location = new google.maps.LatLng('-36.616840','-72.957581');
    
    const options = {
      center:location,
      zoom:10
    };

    const map = new google.maps.Map(this.mapRef.nativeElement,options);
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
