import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  data_categorias: any;

  data_authority: number = 1;

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){
    this.categoriaService.getCategorias().subscribe({
      next: (resp: any) => {
        this.data_categorias = resp;
        this.data_authority = 2;
      },
      error: (err) => {
        console.log(err);
        this.data_authority = 0;
      }
    })
  }

}
