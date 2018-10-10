import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AhijadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ahijados',
  templateUrl: 'ahijados.html',
})
export class AhijadosPage {

  rfc = '';
  cve = '';
  morros : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider,
              private alertCtrl: AlertController
  ) {
    this.rfc = navParams.get('rfc');
    this.cve = navParams.get('cve');
    this.getAhijados();
  }

  getAhijados(){
    this.restProvider.getAhijados(this.cve)
      .then(data => {
        if(data == 510){
          let alert = this.alertCtrl.create({
            title: 'Todavía no se asigna ahijado',
            buttons: ['OK']
          });
          alert.present();
          this.morros = [];
        }else{
          this.morros = JSON.parse(<string>data);
          console.log(this.morros);
          //console.log(this.padrino[0]['nombre_completo']);
        }


      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AhijadosPage');
  }

}
