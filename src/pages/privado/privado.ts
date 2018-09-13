import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the PrivadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privado',
  templateUrl: 'privado.html',
})
export class PrivadoPage {
  sectors: any;
  estructuras: any;
  user = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};
  padrino = {
    CVE_SP: '',
    SECTOR: 5,
    ESTRUCTURA: '',
    APELLIDO_PATERNO: '',
    APELLIDO_MATERNO: '',
    NOMBRES: '',
    RAZON_SOCIAL : '',
    REPRESENTANTE: '',
    RFC: '',
    NO_AHIJADOS: '',
    CALLE : '',
    NUM_EXT: '',
    NUM_INT  : '',
    COLONIA: '',
    CP: '',
    LADA: '',
    TELEFONO: '',
    CORREO: '',
    RECIBO_DEDUCIBLE: '',
    OPCION1: '',
    OPCION2 : '',
    OPCION3: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getSectors();
    this.getEstructura();

  }

  getSectors() {
    this.restProvider.getSectors()
      .then(data => {
        this.sectors = JSON.parse(<string>data);
        console.log(this.sectors);
      });
  }

  getEstructura() {
    this.restProvider.getEstructuraPrivada()
      .then(data => {
        this.estructuras = JSON.parse(<string>data);
        console.log(this.sectors);
      });
  }

  saveUser() {
    console.log(this.padrino);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivadoPage');
  }

}
