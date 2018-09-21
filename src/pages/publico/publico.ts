import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  myForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider,
              private alertCtrl: AlertController,
              public fb: FormBuilder
  ) {
    this.getSectors();
    this.getMuns();

    this.myForm = this.fb.group({
      CVE_SERV_PUBLICO: ['', [Validators.required]],
      SECTOR: [5, [Validators.required]],
      ESTRUCTURA: ['', [Validators.required]],
      PATERNO: ['', [Validators.required, Validators.pattern(/^[a-zñÑ\s]+$/i)]],
      MATERNO: ['', [Validators.required,  Validators.pattern(/^[a-zñÑ\s]+$/i)]],
      NOMBRES: ['', [Validators.required,  Validators.pattern(/^[a-zñÑ\s]+$/i)]],
      SEXO: ['', [Validators.required]],
      RFC: ['', [Validators.required, Validators.pattern(/[A-Z]{4}\d{6}/i), Validators.maxLength(13), Validators.minLength(10)]],
      AHIJADOS: ['', [Validators.required, Validators.min(1), Validators.max(500) ]],
      QUINCENA: ['', [Validators.required]],
      MES: ['', [Validators.required]],
      ANIO: ['', [Validators.required]],
      CARGO: ['', [Validators.required]],
      UNIDAD_ADMIN: [''],
      INSTITUCION: [''],
      CALLE: [''],
      NUM_EXT: [''],
      NUM_INT: [''],
      COLONIA: [''],
      CP: ['', [Validators.min(10000), Validators.max(90000)]],
      LADA: ['',[Validators.required]],
      TELEFONO: ['',[Validators.required]],
      CORREO: ['', [Validators.required, Validators.email]],
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

  getMuns() {
    this.restProvider.getMunicipios()
      .then(data => {
        this.muns = JSON.parse(<string>data);
        console.log(this.muns);
      });
  }

  saveUser(){
    this.restProvider.saveUser(this.myForm.value).then((result) => {
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
    this.restProvider.getEstructuras(this.myForm.value.SECTOR)
      .then(data => {
        this.estructuras = JSON.parse(<string>data);
        console.log(this.estructuras);
      });
  }

  loadDependencias(){
    this.restProvider.getDependencias(this.myForm.value.ESTRUCTURA)
      .then(data => {
        this.dependencias = JSON.parse(<string>data);
        console.log(this.dependencias);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicoPage');

  }

}
