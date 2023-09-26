import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab1Page {
  constructor(private modal: ModalController) {

  }

  group = "friends";

  async openAbout() {
    const modal1 = await this.modal.create({
      component: AboutPage,
    });
    
    modal1.present();
  }
}
