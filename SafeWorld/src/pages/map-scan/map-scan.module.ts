import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapScanPage } from './map-scan';

@NgModule({
  declarations: [
    MapScanPage,
  ],
  imports: [
    IonicPageModule.forChild(MapScanPage),
  ],
})
export class MapScanPageModule {}
