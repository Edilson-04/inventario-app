import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoListaComponent } from "./producto-lista/producto-lista.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ProductoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventario-app';
}
