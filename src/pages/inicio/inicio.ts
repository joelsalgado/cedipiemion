import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import {AhijadosPage} from "../ahijados/ahijados";
import {HomePage} from "../home/home";

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  rfc = '';
  cve = '';
  padrino: any;
  nombre = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider,
              private alertCtrl: AlertController
  ) {
    this.rfc = navParams.get('rfc');
    this.cve = navParams.get('cve');
    this.getPadrino();
  }

  getPadrino() {
    this.restProvider.getPadrino(this.cve, this.rfc)
      .then(data => {
        this.padrino = JSON.parse(<string>data);
        if (data == '575'){
          let alert = this.alertCtrl.create({
            title: 'No se encuentra en la base de datos',
            buttons: ['OK']
          });
          alert.present();
        }

        if (data == '500'){
          let alert = this.alertCtrl.create({
            title: 'No se encuentra en la base de datos',
            buttons: ['OK']
          });
          alert.present();
        }

        if (data == '565'){
          let alert = this.alertCtrl.create({
            title: 'Se encuentra en proceso de validaciòn',
            buttons: ['OK']
          });
          alert.present();
        }
        if(this.padrino){
          console.log(this.padrino);
          this.nombre = this.padrino['nombre_completo'];
        }
        //console.log(this.padrino[0]['nombre_completo']);
      });
  }

  goAhijados(){
    this.navCtrl.push(AhijadosPage, {rfc: this.rfc, cve: this.cve})
  }

  goEstadoCuenta(){

  }

  goBack(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
