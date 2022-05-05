import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


//services

import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  img: any;
  heroe: any = {};
  casas: boolean = false;
  heroeS: any = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private _heroesService: HeroesService,

  ) {
    this.activateRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id'])
      console.log(this.heroe)
      this.heroeS = params['id'];
      console.log(this.heroeS)

      console.log("initialized from component");


    })

  }

  addVid() {

  }


}
