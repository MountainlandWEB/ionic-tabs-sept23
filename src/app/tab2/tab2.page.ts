import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class Tab2Page {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  friends = [
    { avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg', name: 'John', status: 'online' },
  ];

  goToFriend(person: any) {
    this.router.navigate(['/person',
      { state: { person }, relativeTo: this.activatedRoute }]);
  }

}
