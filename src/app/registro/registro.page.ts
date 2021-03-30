import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/libro';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  libro: Libro = new Libro();

  constructor(
    private libService: LibrosService
    ) { }

  ngOnInit( ) {
  }

  registrarLibro(){
    this.libro.estado = true;
    this.libService.registrarLibro(this.libro);
    this.libro = new Libro();
    alert("Registro exitoso");
  }
}
