import { Component, OnInit } from '@angular/core';
import { Hero, Heroes } from 'src/app/data/heroes';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  heroes: Hero[] = Heroes;
  constructor() {}
  ngOnInit() {
    // Show only horde heroes
    this.heroes = this.heroes.filter((hero) => hero.faction === 'horde');
  }
}
