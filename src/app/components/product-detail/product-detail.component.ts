import { Component, Input, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  list: any[] = [];
  product: any
  @Input() productId: number = 0;

  sesion: boolean = false

  constructor(private http: HttpClient) {
    this.sesion = localStorage.getItem('sesion') === 'true'
  }

  ngOnInit(): void {
    this.http.get<any[]>('https://wabisabi-server-production.up.railway.app/archivos/productos/').subscribe(
      (response) => {
        this.list = response; // Almacena la lista de productos en la propiedad
        this.product = this.list.find(product => product.id === this.productId);
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
  encodeText(text: string): string {
    return encodeURIComponent(text);
  }

  borrarProducto(productoId: number) {
    const url = `https://wabisabi-server-production.up.railway.app/archivos/borrar-producto/${productoId}/`;
    this.http
      .delete(url)
      .toPromise()
      .then(() => {
        Swal.fire("Eliminado...", "El producto ha sido eliminado correctamente", "success").then(() => {
          window.location.reload();
        });
      })
      .catch(error => {
        Swal.fire("Error...", "Ocurrió un error al eliminar el producto", "error");
      });

  }
}
