import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {OptionsPage} from '../options/options'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController ) {

  }


  goOptions():void{
    this.navCtrl.push(OptionsPage);
  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Aviso de Privacidad',
      message: '<p align="justify">El Consejo Estatal para el Desarrollo Integral de los Pueblos Indígenas del Estado de México, (CEDIPIEM), con domicilio en Nigromante número 305, colonia La Merced, Toluca de Lerdo, Estado de México, C.P. 50080; a través de sus unidades administrativas, es el responsable del uso, protección y tratamiento de los datos personales de sus usuarios, observando para ello lo previsto en la Ley de Protección de Datos Personales del Estado de México</p>.\n' +
        '\n' +
        '<p align="justify"La entrega de los datos personales es voluntaria, en caso de que el titular se negase a entregarlos, se tendrá como consecuencia el no estar en posibilidades de realizar el trámite o gestión que pretende llevar a cabo. En caso de no negar su oposición a este acto, se entiende que existe un consentimiento expreso para su tratamiento, en los términos citados en el presente Aviso de Privacidad.</p>\n' +
        '\n' +
        '<p align="justify">Los datos personales recabados por el CEDIPIEM y los cuales son proporcionados por usted, serán de utilidad para el desarrollo de las actividades propias del CEDIPIEM siendo las siguientes:</p>\n' +
        '\n' +
        '    <p>Identificar al interesado para poder dar trámite a su solicitud.</p>\n' +
        '    <p>Cumplir con los requisitos establecidos en las Reglas de Operación de los Programas Sociales que son desarrollados por el CEDIPIEM.</p>\n' +
        '    <p>Proveer el apoyo solicitado al interesado si resulta beneficiado. </p>\n' +
        '    <p>Realizar trámites administrativos propios del CEDIPIEM, entre otros. </p>\n' +
        '\n' +
        '<p align="justify">Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, utilizaremos los siguientes Datos Personales: nombre completo, fecha de nacimiento, edad, fotografía, sexo, estado civil, nacionalidad, entidad federativa de nacimiento, certificado médico, grado de estudios, Registro Federal de Contribuyentes (RFC), Clave Única de Registro de Población (CURP), identificación oficial, domicilio, firma autógrafa, constancia de antecedentes no penales, cartilla de servicio militar, currículum vitae, título, cédula profesional, solicitud de empleo, documentos de reclutamiento y selección, nombramiento, incidencia y capacitación, afiliación sindical, contrato de apertura de cuenta bancaria, manifestación de bienes, Formato Único de Movimientos de Personal (FUMP), teléfono fijo o celular y correo electrónico particulares, entre otros.</p>\n' +
        '\n' +
        '<p align="justify">El CEDIPIEM manifiesta que no transmitirá sus datos personales a persona física o jurídico colectiva alguna, sin su consentimiento expreso, notificándole, en su caso, qué datos serán transmitidos, cuál es la finalidad de dicho trámite y quién es el destinatario.</p>\n' +
        '\n' +
        '<p align="justify">El titular podrá, en los términos previstos por la Ley de Protección de Datos Personales del Estado de México, así como por los Lineamientos en la materia, ejercer sus derechos de acceso, rectificación, cancelación y oposición de sus datos personales (Derechos ARCO).</p>\n' +
        '\n' +
        '<p align="justify">Se le informa que sus datos no podrán ser difundidos sin su consentimiento expreso, salvo las excepciones previstas en la Ley.</p>\n' +
        '\n' +
        '<p align="justify">Asimismo, el CEDIPIEM atenderá las solicitudes que el titular tenga respecto a la revocación de su consentimiento para dar tratamiento, uso o divulgar sus datos personales; aunado a esto el titular de los datos debe considerar que esta acción puede provocar que no se siga prestando el servicio solicitado o concluir el trámite que el titular ha iniciado ante el CEDIPIEM.</p>',
      buttons: ['Ok']
    });
    alert.present();
  }
}
