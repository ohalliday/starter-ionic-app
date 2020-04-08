import { Component, OnInit } from '@angular/core';
import { Hero, Heroes } from 'src/app/data/heroes';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  heroes: Hero[] = Heroes;
  faction = 'Other';
  constructor() {}
  ngOnInit() {
    // Show only Alliance heroes
    this.heroes = this.heroes.filter((hero) => hero.faction === this.faction);
  }
}
