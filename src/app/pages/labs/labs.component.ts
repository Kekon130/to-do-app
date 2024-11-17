import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  //Para que las variables sean accesibles desde el front deben ser públicas (por defecto lo son)
  welcome = 'Bienvenido';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio'
  ];
  disabled = true;
  person = {
    name: "Sergio",
    age: 22,
    avatar: "https://fastly.picsum.photos/id/903/200/200.jpg?hmac=lxHKyjlQqAkKyuVGkgUCO_jdWkg3osj3nTuULFHZxH8"
  }

  clickHandler() {
    alert('Hola');
  }

  doubleClickHandler() {
    alert('Adios');
  }

  changeHandler(event: Event) {
    console.log(event);
  }
}
