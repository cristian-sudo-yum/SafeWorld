import { Component, ElementRef, ViewChild ,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { ToastController } from 'ionic-angular';


declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  scanSubscription;
  map:any;

  markers: Marker[] = [
    {
      position: {
        lat: -36.8270795,
        lng: -73.0502399,
      },
      title: 'Punto Limpio Plaza de la Independencia'
    },
    {
      position: {
        lat:  -36.828544,
        lng:  -73.037242,
      },
      title: 'Punto Limpio Campanil'
    },
    {
      position: {
        lat: -36.833609,
        lng:  -73.049553,
      },
      title: 'Punto Limpio Parque Ecuador'
    }
  ];

  constructor(public navCtrl: NavController, 
              private qrScanner: QRScanner, 
              private toastCtrl: ToastController) {

  }

  ngOnInit(){
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -36.8270795, lng: -73.0502399};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
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
