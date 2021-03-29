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
  constructor(
    private libService: LibrosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.uid = this.route.snapshot.paramMap.get('uid')
   }

  ngOnInit() {
  }

  getLibro(uid: string){
    this.libService.getLibroById(uid)
    .subscribe(data =>{
      this.libro = JSON.parse(JSON.stringify(data));
    })
  }

}
