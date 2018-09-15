//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HTTP} from "@ionic-native/http";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://187.189.134.199:8000/cedipiem/public/sedesem/padrino';

  constructor(private http: HTTP) {
    console.log('Hello RestProvider Provider');
  }

  getEstructuraPrivada() {
    return new Promise(resolve => {
      this.http.get('http://187.189.134.199:8000/cedipiem/public/sedesem/padrino/sectores/estructuras/5', {}, {}).
      then((data) => {
        resolve(data.data);
      })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  getEstructuras(id) {
    return new Promise(resolve => {
      this.http.get('http://187.189.134.199:8000/cedipiem/public/sedesem/padrino/sectores/estructuras/'+id, {}, {}).
      then((data) => {
        resolve(data.data);
      })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  getDependencias(id) {
    return new Promise(resolve => {
      this.http.get('http://187.189.134.199:8000/cedipiem/public/sedesem/padrino/sectores/estructuras/dependencia/'+id, {}, {}).
      then((data) => {
        resolve(data.data);
      })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  getSectors() {
    return new Promise(resolve => {
      this.http.get('http://187.189.134.199:8000/cedipiem/public/sedesem/padrino/sectores', {}, {}).
      then((data) => {
        resolve(data.data);
      })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  getMunicipios() {
    return new Promise(resolve => {
      this.http.get('http://187.189.134.199:8000/cedipiem/public/sedesem/padrino/municipios', {}, {}).
      then((data) => {
        resolve(data.data);
      })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  saveUser(data) {
    return new Promise(resolve => {
      this.http.post('http://187.189.134.199:8000/cedipiem/public/api/padrino/nuevo-padrino/app', data , {}).
      then((res) => {
        resolve(res);
      })
        .catch((error) => {
          console.log(error);
        });
    });
  }



}
