import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from "../index.paginas";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  activarPrincipal(){

    this.navCtrl.parent.select(1);

  }

  mostrarModal(){
    let modal = this.modalCtrl.create( ModalPage, { nombre: "Pedro", edad: 30 } );
    modal.present();

    modal.onDidDismiss( parametros => {

      if(parametros){
        console.log("Data del Modal:");
        console.log(parametros);
      }else{
        console.log("Se cerró sin parametros");
      }

    });
  }

}
