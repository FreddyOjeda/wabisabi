import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product = {
    price: 0,
    description: '',
    imageName: ''
  };

  imageData: string | ArrayBuffer | null | undefined= null;
  image:any

  constructor(private http: HttpClient) { }

  onImageSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      this.image=file
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageData = e.target?.result;
      };
      reader.readAsDataURL(file);
    }

    
  }

  onSubmit(form: NgForm) {
    const formData = new FormData();
    formData.append('imagen', this.image); // Asume que tienes el archivo seleccionado en this.selectedImageFile
    formData.append('descripcion', this.product.description); // Asume que tienes la descripción en this.productDescription
    formData.append('precio', this.product.price.toString()); // Asume que tienes el precio en this.productPrice
    console.log(formData);
    
    // Guarda los datos del producto en un archivo JSON
    this.http.post('http://127.0.0.1:8000/archivos/cargar/', formData).subscribe((response) => {
      alert('Producto guardado');
      console.log(response);
      
    });
    form.resetForm();
  }
}
