import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';


@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
  terminoS:any;

  constructor(private activatedRoute:ActivatedRoute,
              private  _heroesServices:HeroesService) {  }


      
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.terminoS = params['termino']
      this.heroes = this._heroesServices.buscarHeroes(params['termino'])
     
     })
    
  }

}