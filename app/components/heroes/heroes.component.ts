import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';

import { Hero } from '../../models/hero/hero';

import { HeroService } from '../../services/hero.service';



@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls : ['heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }
  
  ngOnInit() {
    this.getHeroes()
  }
  
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);  
  }

  goToDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
} 


