import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles:[`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
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
                  private router: Router,
                  private snackBar: MatSnackBar) {}

  ngOnInit(): void {

    //Si no estamos en la url de editar, salimos
    if( !this.router.url.includes('editar') ) {
      return;
    }
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
          .subscribe( heroe => {
            console.log( 'Actualizando', heroe);
            this.mostrarSnackBar('Registro actualizado');
          })
      }else{
        //Crear
        this.heroesService.agregarHeroe ( this.heroe )
        .subscribe ( heroe => {
          //console.log('Respuesta: ', resp);
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnackBar('Registro creado');
        })
      }
/*
this.heroesService.agregarHeroe ( this.heroe )
        .subscribe ( resp => {
          console.log('Respuesta: ', resp);
        })
*/
    }
    borrar() {
      this.heroesService.borrarHeroe( this.heroe.id!)
        .subscribe( resp => {
          this.router.navigate( ['/heroes']);
        })
      }

    mostrarSnackBar( mensaje: string) {
      this.snackBar.open( mensaje, 'ok!', {
        duration: 2500
      });
    }
}
