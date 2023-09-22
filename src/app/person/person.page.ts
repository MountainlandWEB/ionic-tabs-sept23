import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PersonPage implements OnInit {

  constructor(private router: Router) { 
    if (this.router.getCurrentNavigation()!.extras.state) {
      this.person = this.router.getCurrentNavigation()!.extras!.state!['person'];
    }
  }

  ngOnInit() {
  }

  person: any = {};

}
