import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(
    private auth: AuthService
  ){}

  ingresar() {
    // Accede a los valores de los campos de entrada
    const usuario = (document.getElementById('usuario') as HTMLInputElement).value;
    const contrasena = (document.getElementById('contrasena') as HTMLInputElement).value;

    // Realiza la validación con los valores ingresados
    if (usuario === 'LuGarzon' && contrasena === 'Wabisabi2004') {
      // Los datos son válidos, realiza la acción deseada
      localStorage.setItem('sesion', 'true');
      Swal.fire({
        title: 'Hola Lu',
        text: 'Tu cuenta ha sido verificada',
        icon: 'success',
        showConfirmButton: false,
        showCancelButton: false,
      });
      setTimeout(() => {
        // Recarga la página
        window.location.reload();
      }, 3000); 
    } else {
      // Los datos no son válidos, muestra un mensaje de error o realiza la acción correspondiente
      Swal.fire("Ups!!!", "Los datos no coinciden", "error");
    }
  }

  passKeyLogIn(){
    this.auth.loginWithRedirect()
  }
}
