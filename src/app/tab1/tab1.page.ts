import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  providers: [Badge],
})
export class Tab1Page implements OnInit {
  constructor(private modal: ModalController, private badge: Badge) {

  }

  ngOnInit() {
    this.setBadgeCount();
  }

  group = "friends";
  badgeCount = 3;

  async openAbout() {
    const modal1 = await this.modal.create({
      component: AboutPage,
    });
    
    modal1.present();
  }

  async setBadgeCount() {
    try {
      await this.badge.set(this.badgeCount);
    } catch (e) {
      console.log(e);
    }
    const evt = new CustomEvent('badgeCount', { detail: this.badgeCount });
    window.dispatchEvent(evt);
  }

  async clearBadgeCount() {
    this.badgeCount = 0;
    try {
      await this.badge.clear();
    } catch (e) {
      console.log(e);
    }
    const evt = new CustomEvent('badgeCount', { detail: this.badgeCount });
    window.dispatchEvent(evt);
  }
}
