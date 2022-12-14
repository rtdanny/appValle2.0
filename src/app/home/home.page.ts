import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formLogin!: FormGroup;
  formValue = {nameUser: '', password: ''};

  usuario: any[] = [];

  mostrarPassword = false;
  passworVista='eye';
  
  constructor(
    private nav: NavController,
    private dataService: DataService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
   
  }

  iniciarSesion(){
    
  }

  registrarse(){
    this.nav.navigateRoot(['../home/registro']);
  }

  mPass(){
    this.mostrarPassword = !this.mostrarPassword;
    if (this.passworVista === 'eye') {
      this.passworVista = 'eye-off-outline';
    }else{
      this.passworVista = 'eye';
    }
  }

  async present_toast(a: any){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }
}
