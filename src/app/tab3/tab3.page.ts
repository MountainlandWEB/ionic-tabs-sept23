import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PeopleService } from '../api/peopleService';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [PeopleService],
})
export class Tab3Page implements OnInit {
  constructor(private people: PeopleService) {}

  peopleList: Observable<any> = new Observable();
  filteredList: Observable<any> = new Observable();
  searchText = '';

  ngOnInit() {
    this.peopleList = this.people.getPeople(20);
    this.filteredList = this.peopleList;
  }

  onInput(event: any) {
    this.filteredList = this.peopleList.pipe(
      map((people: any) => people.filter(this.find.bind(this)))
    );
  }

  goToPerson(person: any) {
    console.log(person)
  }

  find(person: any) {
    return this.searchText.trim() === ''
      || `${ person.first_name } ${ person.last_name }`.toLowerCase()
      .includes(this.searchText.toLowerCase());
  }
}
