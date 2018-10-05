import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { OptionsPageModule } from '../pages/options/options.module';
import { PrivadoPageModule } from '../pages/privado/privado.module';
import { PublicoPageModule } from '../pages/publico/publico.module';
import {LoginPageModule} from "../pages/login/login.module";
import {InicioPageModule} from "../pages/inicio/inicio.module";
import {AhijadosPageModule} from "../pages/ahijados/ahijados.module";


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RestProvider} from "../providers/rest/rest";
import {HTTP} from "@ionic-native/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    OptionsPageModule,
    PrivadoPageModule,
    PublicoPageModule,
    LoginPageModule,
    InicioPageModule,
    AhijadosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HTTP
  ]
})
export class AppModule {}
