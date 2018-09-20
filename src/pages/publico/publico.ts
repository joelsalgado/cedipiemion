import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PublicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publico',
  templateUrl: 'publico.html',
})
export class PublicoPage {
  sectors: any;
  estructuras: any;
  dependencias: any;
  muns: any;
  padrino = {
    CVE_SERV_PUBLICO: '',
    SECTOR: 5,
    ESTRUCTURA: '',
    DEPENDENCIA: '',
    PATERNO: '',
    MATERNO: '',
    NOMBRES: '',
    SEXO : '',
    RFC: '',
    NO_AHIJADOS: '',
    QUINCENA: '',
    MES: '',
    ANIO: '',
    CARGO: '',
    UNIDAD_ADMIN: '',
    INSTITUCION: '',
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
  ) {
    this.getSectors();
    this.getMuns();

  }
  getSectors() {
    this.restProvider.getSectors()
      .then(data => {
        this.sectors = JSON.parse(<string>data);
        console.log(this.sectors);
      });
  }

  getMuns() {
    this.restProvider.getMunicipios()
      .then(data => {
        this.muns = JSON.parse(<string>data);
        console.log(this.muns);
      });
  }

  saveUser(){
    this.restProvider.saveUser(this.padrino).then((result) => {
      console.log(result);
      if(result == '{"Ok":"200","Mensaje: ":"Registro agregado correctamente."}'){
        let alert = this.alertCtrl.create({
          title: 'Registro Correcto',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.popTo('OptionPage');

      }else {
        if (result == '{"Error":"505","Mensaje: ":"El RFC esta duplicado."}') {
          let alert = this.alertCtrl.create({
            title: 'RFC ya se encuentra en el sistema',
            buttons: ['OK']
          });
          alert.present();
        }
        if(result == '{"Error":"535","Mensaje: ":"Los municipios a apadrinar est\u00e1n duplicados"}' ){
          let alert = this.alertCtrl.create({
            title: 'Debes Escoger Diferentes MUnicipios',
            buttons: ['OK']
          });
          alert.present();
        }
      }
    }, (err) => {
      console.log(err);
    });
  }

  loadEstructuras(){
    this.restProvider.getEstructuras(this.padrino.SECTOR)
      .then(data => {
        this.estructuras = JSON.parse(<string>data);
        console.log(this.estructuras);
      });
  }

  loadDependencias(){
    this.restProvider.getDependencias(this.padrino.ESTRUCTURA)
      .then(data => {
        this.dependencias = JSON.parse(<string>data);
        console.log(this.dependencias);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicoPage');

  }

}
