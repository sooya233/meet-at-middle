import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { global } from "../global"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sliderOpt = {
    zoom: {
      maxRatio: 10,
    }
  }

  constructor(public router:Router, public alertController: AlertController) {}
  gotoFindPage() {
    this.router.navigateByUrl('/find-page');
  }

  async Alert(station:string) {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: station,
      message: "선택한 역이 맞습니까?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            global.stations.push(station)
            console.log(global);
          }
        },
        {
          text: "No",
          handler: () => {
            console.log('Confirm No');
          }
        }
      ]
    });

    await alert.present();
  }
}
