import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {
  productos: Producto[];
  

  constructor(private productoServicio: ProductoService,
    private enrutador: Router){}


  ngOnInit(): void {
    this.obtenerProductos();
  }

    private obtenerProductos(){
       //consumir los datos del observable(suscribirnos)
       this.productoServicio.obtenerProductosLista().subscribe(
        (datos => {
          this.productos = datos;
        })
       );
    }

    editarProducto(id:number){
      this.enrutador.navigate(['editar-producto',id]);
    }

    eliminarProducto(id: number){
          this.productoServicio.eliminarProducto(id).subscribe(
            {
              next:(datos) => this.obtenerProductos(),
              error:(errores) => console.log(errores)
            }
          );
    }
    
    
  
}
