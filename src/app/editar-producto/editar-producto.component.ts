import { ProductoService } from './../producto.service';
import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html'
})
export class EditarProductoComponent {
  producto: Producto = new Producto();
  id: number;

  constructor(private productoService: ProductoService,
    private ruta: ActivatedRoute,
    private enrutador: Router) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params['id'];
    this.productoService.obtenerProductoPorId(this.id).subscribe(
      {
        next: (datos) => this.producto = datos,
        error: (errores: any) => console.log(errores)
      }
    );
  }

  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoService.guardarProducto(this.id, this.producto).subscribe(
      {
        next: (datos) => this.irProductoLista(),
        error: (errores) => console.log(errores)
      }
    );
  }

  irProductoLista() {
    this.enrutador.navigate(['/productos']);
  }

}
