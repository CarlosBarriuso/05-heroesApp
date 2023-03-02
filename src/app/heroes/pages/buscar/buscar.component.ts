import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',

})
export class BuscarComponent {

  termino: string = '';
  heroes:Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor( private servicio: HeroesService ){

  }

  buscando() {
    this.servicio.getSugerencias(this.termino)
      .subscribe( heroes => this.heroes = heroes );
     if(this.heroes.length === 0) console.log('No se ha encontrado nada');
  }

  opcionSeleccionada( evento:MatAutocompleteSelectedEvent ) {
    //console.log(evento);
    // validar si el evento es un string vacio
if (evento.option.value === '') {
  this.heroeSeleccionado = undefined;
  return console.log('nada que mostrar');
}

    const heroe: Heroe = evento.option.value;
    console.log(heroe);
    this.termino = heroe.superhero;

    this.servicio.getHeroePorId( heroe.id! )
      .subscribe( heroe => this.heroeSeleccionado = heroe );
  }

}
