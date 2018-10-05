import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InicioPage} from '../inicio/inicio';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myForm: FormGroup;
  rfc: '';
  cve_serv: '';
  padrino: any;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fb: FormBuilder,
              public restProvider: RestProvider,
              private alertCtrl: AlertController
  ) {
    this.myForm = this.fb.group({
      CVE_SERV_PUBLICO: ['', [Validators.required]],
      RFC: ['', [Validators.pattern(/[A-Z]{4}\d{6}/i), Validators.maxLength(13), Validators.minLength(10)]],
    });
  }

  changeView(){
    this.cve_serv = this.myForm.value.CVE_SERV_PUBLICO;
    console.log(this.cve_serv);
    this.rfc = (this.myForm.value.RFC == '') ? null : this.myForm.value.RFC;
    console.log(this.rfc);

    this.restProvider.getPadrino(this.cve_serv, this.rfc)
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
          this.navCtrl.setRoot(InicioPage, {rfc: this.rfc, cve: this.cve_serv})
        }
        //console.log(this.padrino[0]['nombre_completo']);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
