import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PublicoPage} from "../publico/publico";
import {PrivadoPage} from "../privado/privado";

/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
  }

  goPublico():void{
    this.navCtrl.push(PublicoPage);
  }

  goPrivado():void{
    this.navCtrl.push(PrivadoPage);
  }

}
