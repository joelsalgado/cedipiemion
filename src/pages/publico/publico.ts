import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,  public restProvider: RestProvider) {
    this.getSectors();
  }
  getSectors() {
    this.restProvider.getSectors()
      .then(data => {
        this.sectors = JSON.parse(<string>data);
        console.log(this.sectors);
      });
  }

  loadState(){
      console.log();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicoPage');
  }

}
