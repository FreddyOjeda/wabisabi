import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProfileComponent } from '../profile/profile.component';

import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = [];
  sesion: boolean = false

  constructor(private http: HttpClient, private modalService: NgbModal) {
    this.sesion = localStorage.getItem('sesion') === 'true'
  }

  openDialog(id: any): void {
    const modalRef = this.modalService.open(ProductDetailComponent, {
      windowClass: 'custom-modal', // Aplica la clase CSS personalizada
    });
    modalRef.componentInstance.productId = id;
  }

  openDialog2(): void {
    const modalRef = this.modalService.open(ProfileComponent);
  }

  openDialog3(): void {
    const modalRef = this.modalService.open(ProductFormComponent);
    // Agrega un oyente para el evento 'hidden.bs.modal' (se dispara cuando se cierra el modal)
    modalRef.result.then(
      (result) => {
        window.location.reload();
        // Esta función se ejecutará cuando se cierre el modal
        console.log('Modal cerrado con resultado:', result);

        // Recarga la página
      },
      (reason) => {
        // Esta función se ejecutará si se cierra el modal de otra manera (por ejemplo, haciendo clic fuera del modal)
        window.location.reload();
        console.log('Modal cerrado debido a:', reason);
      }
    );
  }

  ngOnInit(): void {
    // Realiza una solicitud GET al endpoint de obtener productos en Django
    this.http.get<any[]>('https://wabisabi-server-production.up.railway.app/archivos/productos/').subscribe(
      (response) => {
        this.products = response; // Almacena la lista de productos en la propiedad
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
  cerrarSesion() {
    localStorage.setItem('sesion', 'false')
    window.location.reload();
  }

  currentIndex = 0;

  showSlide(index: number) {
    const slides = document.querySelectorAll('.slider-item');
    if (index < 0) {
      this.currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      this.currentIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', `transform: translateX(${100 * (i - this.currentIndex)}%);`);
    }
  }

  prevSlide() {
    this.currentIndex=this.currentIndex-2;
    this.showSlide(this.currentIndex);
  }

  nextSlide() {
    this.currentIndex=this.currentIndex+2;
    this.showSlide(this.currentIndex);
  }

}
