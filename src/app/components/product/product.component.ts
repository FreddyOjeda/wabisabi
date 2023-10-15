import { Component, Inject, OnInit } from '@angular/core';
//import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  list: any[] = [{ "id": 1, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/1.png" }, { "id": 2, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/2.png" }, { "id": 3, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/3.png" }, { "id": 4, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/4.png" }, { "id": 5, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/5.png" }, { "id": 6, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/6.png" }, { "id": 7, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/7.png" }, { "id": 8, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/8.png" }, { "id": 9, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/9.png" }, { "id": 10, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/10.png" }, { "id": 11, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/11.png" }, { "id": 12, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/12.png" }, { "id": 13, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/13.png" }, { "id": 14, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/14.png" }, { "id": 15, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/15.png" }, { "id": 16, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/16.png" }, { "id": 17, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/17.png" }, { "id": 18, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/18.png" }, { "id": 19, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/19.png" }, { "id": 20, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/20.png" }, { "id": 21, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/21.png" }, { "id": 22, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/22.png" }, { "id": 23, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/23.png" }, { "id": 24, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/24.png" }, { "id": 25, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/25.png" }, { "id": 26, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/26.png" }, { "id": 27, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/27.png" }, { "id": 28, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/28.png" }, { "id": 29, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/29.png" }, { "id": 30, "descripcion": "Hola", "precio": 20000, "imagen": "assets/images/products/30.png" }];
  productId: number=0;
  product : any

  constructor() {
  }

  ngOnInit(): void {
    /* this.product = this.list.find(product => product.id === this.data.id);
    console.log('Datos recibidos en el diálogo:', this.data.id); */
    console.log('Datos recibidos en el diálogo:', this.product);
  }
}
