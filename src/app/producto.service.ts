import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase="http://localhost:8080/inventario-app/productos";


  constructor(private clienteHttp:HttpClient) { }
}
