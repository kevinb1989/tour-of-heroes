import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit{ 

  selectedHero: Hero;

  public heroes: Hero[];
  
  constructor(
    private router: Router,
    private heroService: HeroService) { }
  
  onSelect(hero: Hero) { this.selectedHero = hero; }

  getHeroes(){
	  this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

  ngOnInit(){
	  this.getHeroes();
  }

}
