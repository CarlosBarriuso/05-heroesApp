import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent implements OnInit{

  @Input() heroe!: Heroe;

  //Para poder leer el URL inyectamos
  constructor(private activatedRouter: ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.heroe);
    this.activatedRouter.params
      .subscribe( ({ id }) => console.log( id ) );
  }

}
