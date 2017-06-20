import { Component }  from '@angular/core';
import { NavParams, NavController }  from "ionic-angular";

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html'
})

export class Pagina3Page {

  mutante:any = {};

  constructor(private navParams:NavParams,
              private navCtrl: NavController){
    console.log(navParams);

    this.mutante = this.navParams.get("personaje")
    // "personaje" viene de pagina2.ts de la funcion irPagina3()
  }

  irAtras(){
    this.navCtrl.pop();
  }
  irRoot(){
    this.navCtrl.popToRoot();
  }


}