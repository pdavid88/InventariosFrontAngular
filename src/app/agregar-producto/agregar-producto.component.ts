import { ProductoService } from './../producto.service';
import { Component } from '@angular/core';
import { Producto } from '../producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html'
})
export class AgregarProductoComponent {

  producto: Producto = new Producto();

  constructor(private productoService: ProductoService, private enrutador: Router) { }

  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoService.agregarProducto(this.producto).subscribe(
      {
        next: (datos) => {
          this.irListaProductos();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }

  irListaProductos() {
    this.enrutador.navigate(['/productos']);
  }

}
