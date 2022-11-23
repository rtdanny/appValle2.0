import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { NavController, ToastController } from '@ionic/angular';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    public actionctrl: ActionSheetController,
    private nav: NavController,
    
  ) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionctrl.create({
      header: 'MENU',
      cssClass: 'my-custom-class',
      animated: true,
      mode: 'ios',
      buttons: [{
        text: 'Paquetes',
        icon: 'add-outline',
        handler: () => {
          this.dato('paquetes');
        }
      }, {
        text: 'Transporte',
        icon: 'chatbubbles-outline',
        handler: () => {
          this.dato('transporte');
        }
      }, {
        text: 'Ofertas',
        icon: 'settings-outline',
        handler: () => {
          this.dato('ofertas');
        }
      }, {
        text: 'Gias',
        icon: 'settings-outline',
        handler: () => {
          this.dato('gias');
        }
      }, {
        text: 'Experiencia',
        icon: 'settings-outline',
        handler: () => {
          this.dato('experiencia');
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Cerrar sesion',
        icon: 'exit-outline',
        handler: () => {
          this.cerrarSesion();
        }
      }
    ]
    });
    await actionSheet.present();
  }

  dato(a: any){
    console.log(a);
    this.nav.navigateRoot(['../../home/'+a+'']);
  }

  cerrarSesion(){
    this.nav.navigateRoot(['../../home']);
  }
}
