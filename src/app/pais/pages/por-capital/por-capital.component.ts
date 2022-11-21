import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino:string = '';
  hayError: boolean = false;
  capital: Country[] = [];

  constructor( private paisServices: PaisService) { }

  buscar( termino : string){
    this.hayError = false;
    this.termino = termino; 
    
    this.paisServices.buscarCapital( termino )
    .subscribe ( (paises) => {

      this.capital = paises;
      
    }, (err) =>{
        this.hayError = true;
        this.capital   = [];
    });

  }


}
