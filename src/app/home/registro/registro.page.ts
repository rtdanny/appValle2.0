import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro!: FormGroup;
  formValue = {name: '',  mail: '', nameUser: '', password: ''};

  usuario: any[] = [];

  mostrarPassword = false;
  passworVista='eye';

  constructor(
    private nav: NavController,
    private dataService: DataService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }



  registrarse(){
   
  }

  mPass(){
    this.mostrarPassword = !this.mostrarPassword;
    if (this.passworVista === 'eye') {
      this.passworVista = 'eye-off-outline';
    }else{
      this.passworVista = 'eye';
    }
  }

  ataras(){
    this.nav.navigateRoot(['../home']);
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
