import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

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
  myForm: FormGroup;
  sectors: any;
  estructuras: any;
  muns: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider,
              private alertCtrl: AlertController,
              public fb: FormBuilder
  ){
    this.getSectors();
    this.getEstructura();
    this.getMuns();

    this.myForm = this.fb.group({
      CVE_SERV_PUBLICO: ['', [Validators.required]],
      SECTOR: [5, [Validators.required]],
      ESTRUCTURA: ['', [Validators.required]],
      PATERNO: ['', [Validators.required, Validators.pattern(/^[a-zñÑ\s]+$/i)]],
      MATERNO: ['', [Validators.required,  Validators.pattern(/^[a-zñÑ\s]+$/i)]],
      NOMBRES: ['', [Validators.required,  Validators.pattern(/^[a-zñÑ\s]+$/i)]],
      RAZON_SOCIAL: ['', [Validators.required]],
      REPRESENTANTE: [''],
      RFC: ['', [Validators.required, Validators.pattern(/[A-Z]{4}\d{6}/i), Validators.maxLength(13), Validators.minLength(10)]],
      AHIJADOS: ['', [Validators.required, Validators.min(1), Validators.max(500) ]],
      CALLE: [''],
      NUM_EXT: [''],
      NUM_INT: [''],
      COLONIA: [''],
      CP: ['', [Validators.min(10000), Validators.max(90000)]],
      LADA: ['', [Validators.required]],
      TELEFONO: ['', [Validators.required]],
      CORREO: ['', [Validators.required, Validators.email]],
      RECIBO_DEDUCIBLE: ['', [Validators.required]],
      OPCION1: ['', [Validators.required]],
      OPCION2: ['', [Validators.required]],
      OPCION3: ['', [Validators.required]],
    });

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
    this.restProvider.saveUser(this.myForm.value).then((result) => {
      console.log(result);
      if(result == '{"Ok":"200","Mensaje: ":"Registro agregado correctamente."}'){
        let alert = this.alertCtrl.create({
          title: 'Registro Correcto',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.popTo('OptionPage');

      }else{
        if(result == '{"Error":"505","Mensaje: ":"El RFC esta duplicado."}' ){
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivadoPage');
  }

}
