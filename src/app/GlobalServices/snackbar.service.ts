import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private toastController: ToastController) { }

  async presentToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }
}
