import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
//import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  product_list: any[] =[]
  products: any[]=[];

  constructor(private http: HttpClient){
    for (let id = 1; id <= 30; id++) {
      this.product_list.push({
        id: id,
        descripcion: 'Hola',
        precio: 20000,
        imagen: `assets/images/products/${id}.png`
      });
    }
  }

  openDialog(id:any): void {
    /* const dialogRef = this.dialog.open(ProductDetailComponent, {
      width: '600px', // Ancho del diálogo
      data: { id }
    });

    // Opcional: puedes realizar acciones después de que se cierre el diálogo
    dialogRef.afterClosed().subscribe(result => {
      //alert(`Diálogo cerrado con resultado: ${result}`);
    }); */
  }

  ngOnInit(): void {
    // Realiza una solicitud GET al endpoint de obtener productos en Django
    this.http.get<any[]>('http://127.0.0.1:8000/archivos/productos/').subscribe(
      (response) => {
        this.products = response; // Almacena la lista de productos en la propiedad
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
