import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-trajeta',
  templateUrl: './heroe-trajeta.component.html',

})
export class HeroeTrajetaComponent {

  //misHeroes: Heroe[] = [];
  // Recibimos el array de heroes, para que esté disponible en la vista
  //@Input('misHeroes') heroes: any   ;
  @Input() heroe!: Heroe;

}
