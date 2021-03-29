import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../model/libro';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  libro: Libro = new Libro();
  uid: string;
  estado: string;
  constructor(
    private libService: LibrosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.uid = this.route.snapshot.paramMap.get('uid')
   }

  ngOnInit() {
    this.getLibro(this.uid);
  }

  getLibro(uid: string){
    this.libService.getLibroById(uid)
    .subscribe(data =>{
      this.libro = JSON.parse(JSON.stringify(data));
    })
    if(this.libro.estado != true){
      this.estado = "Reservado";
    }else{
      this.estado = "Disponible";
    }
  }

  reservarLibro(){
    this.libService.reservar(this.libro.uid, true);
    alert("Libro reservado con exito");
    this.getLibro(this.libro.uid);

  }

}
