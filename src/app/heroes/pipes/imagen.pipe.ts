import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  // pure: true (es el valor por defecto, solo cambia si hay cambios en el
  // argumento, en este caso no, porque es un objeto,  solo cambia una propiedad del
  // objeto, no el objeto, que es el argumento)
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe ): string {
    //console.log('Pipe imagen se proceso');
    if( !heroe.id && !heroe.alt_img ) {
      return 'assets/no-image.png';
    }else if( heroe.alt_img ) {
      return heroe.alt_img;
    }else{
      return `assets/heroes/${ heroe.id }.jpg`;
    }

    //return './assets/heroes/'+heroe.id+ '.jpg';
  }

}
