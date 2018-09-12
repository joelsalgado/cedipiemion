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
  user = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getSectors();

  }

  getSectors() {
    this.restProvider.getSectors()
      .then(data => {
        this.sectors = JSON.parse(<string>data);
        console.log(this.sectors);
      });
  }

  saveUser() {
    this.restProvider.saveUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivadoPage');
  }

}
