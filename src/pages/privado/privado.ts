import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import {OptionsPage} from "../options/options";

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
  muns: any;
  user = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};
  padrino = {
    CVE_SERV_PUBLICO: '',
    SECTOR: 5,
    ESTRUCTURA: '',
    PATERNO: '',
    MATERNO: '',
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider,
              private alertCtrl: AlertController
  ){
    this.getSectors();
    this.getEstructura();
    this.getMuns();

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
        console.log(this.estructuras);
      });
  }

  getMuns() {
    this.restProvider.getMunicipios()
      .then(data => {
        this.muns = JSON.parse(<string>data);
        console.log(this.muns);
      });
  }




  saveUser() {
    this.restProvider.saveUser(this.padrino).then((result) => {
      console.log(result);
      if(result['status'] == 200){
        let alert = this.alertCtrl.create({
          title: 'Registro Correcto',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.popTo('OptionPage');

      }
    }, (err) => {
      console.log(err);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivadoPage');
  }

}
