import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()  placeholder: string= '';
  
  //! Emitirlo cuando se deja de escribir
  debouncer: Subject<string> = new Subject();

  termino: string = ''; 

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor =>{
      this.onDebounce.emit( valor )
    })
  }

  buscar(){
    this.onEnter.emit(  this.termino);
    
  }
  //Esto conecta el debouncer con el input
  // Cada vez que el usuario escribe, se emite el valor del input, 
  //y nosotros al estas suscritos al debouncer, recibimos todos los cambios
  
  teclaPresionada( event:  any){

    this.debouncer.next(this.termino);
  }

}
