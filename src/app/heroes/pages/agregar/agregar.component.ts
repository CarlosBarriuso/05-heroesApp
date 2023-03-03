import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent implements OnInit{

    plublishers = [
      {
        id : "DC Comics",
        desc: "DC - Comics"
      },
      {
        id: "Marvel Comics",
        desc: "Marvel - Comics"
      }
    ];

    heroe: Heroe = {
      superhero: '',
      alter_ego: '',
      characters: '',
      first_appearance: '',
      publisher: Publisher.DCComics,
      alt_img: ''
    }

  constructor( private heroesService: HeroesService,
                  private activatedRoute: ActivatedRoute,
                  private router: Router) {}

  ngOnInit(): void {

    //verificar el id
    this.activatedRoute.params
    .pipe(
      //para sacar la info del heroe, primero obtenemos el heroe por el id
      switchMap ( ({id}) => this.heroesService.getHeroePorId(id) )
    )
      //.subscribe( ({ id }) => console.log(id));

      .subscribe ( heroe => this.heroe = heroe );
  }



    guardar(){
      console.log(this.heroe);
      if( this.heroe.superhero.trim().length === 0) {
        return;
      }

      if( this.heroe.id ) {
        this.heroesService.actualizarHeroe (this.heroe)
          .subscribe( heroe => console.log( 'Actualizando', heroe))
      }else{
        //Crear
        this.heroesService.agregarHeroe ( this.heroe )
        .subscribe ( heroe => {
          //console.log('Respuesta: ', resp);
          this.router.navigate(['/heroes/editar', heroe.id]);
        })
      }
/*
this.heroesService.agregarHeroe ( this.heroe )
        .subscribe ( resp => {
          console.log('Respuesta: ', resp);
        })
*/
    }
}
