import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivadoPage } from './privado';
//import { RestProvider } from '../../providers/rest/rest';

@NgModule({
  declarations: [
    PrivadoPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivadoPage),
  ],
})
export class PrivadoPageModule {}
