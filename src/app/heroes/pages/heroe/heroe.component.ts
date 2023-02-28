import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles:[`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroeComponent implements OnInit{

  heroe!: Heroe;


  //Para poder leer el URL inyectamos
  constructor(
    private activatedRouter: ActivatedRoute,
    private servicio: HeroesService,
    private router: Router
    ){}

  ngOnInit(): void {

    this.activatedRouter.params
      .pipe(
        switchMap( ({ id }) => this.servicio.getHeroePorId(id) )
      )
      .subscribe( heroe => this.heroe = heroe );

  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
