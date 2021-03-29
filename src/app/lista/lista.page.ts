import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../model/libro';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  libros: Libro[];
  estado: string = "Reservado";
  constructor(
    private libService: LibrosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.listarLibros();
    console.log("descripcion ", this.libros);
  }

  listarLibros(){
    this.libService.getLibros()
    .subscribe(data=>{
      this.libros = data;
    })
  }

  verLibro(uid: string){
    const url = '/libro/'+uid;
    this.router.navigate([url]);
  }

}
