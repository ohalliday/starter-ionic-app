import { Component, OnInit } from '@angular/core';
import { Hero, Heroes } from 'src/app/data/heroes';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  heroes: Hero[] = Heroes;
  faction = 'Alliance';
  constructor() {}
  ngOnInit() {
    // Show only Alliance heroes
    this.heroes = this.heroes.filter((hero) => hero.faction === this.faction);
  }
}
