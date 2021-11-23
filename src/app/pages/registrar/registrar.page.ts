import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //La variable rut es un controlador de un input
  nombre = new FormControl('');
  direccion = new FormControl('');
  correo = new FormControl('');
  pass = new FormControl('');
  rpass = new FormControl('');
  sede = new FormControl('');

  //Para controlar los elementos como grupo
  //Se pueden agregar validaciones
  persona = new FormGroup({
    nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
    direccion: new FormControl('',[Validators.required,Validators.minLength(3)]),
    correo: new FormControl('', Validators.email),
    pass: new FormControl('',[Validators.required,Validators.minLength(3)]),
    rpass: new FormControl('',[Validators.required,Validators.minLength(3)]),
    sede: new FormControl('',[Validators.required,Validators.minLength(3)])
  });

  //Vamos a crear el btn para la acción grabar
  listaPersonas = new Array();
  pers: any;
  grabar() {
    //console.log('Comienzo el proceso');
    //Le entregamos los valores del controlador de grupo a la variable pers
    this.pers = {
      nombre: this.persona.controls.nombre.value,
      direccion: this.persona.controls.direccion.value,
      correo: this.persona.controls.correo.value,
      pass: this.persona.controls.pass.value,
      rpass: this.persona.controls.rpass.value,
      sede: this.persona.controls.sede.value
    };
    console.log(this.pers);

    //Le entregamos los valores de pers a la lista y lo agregamos con un push
    this.listaPersonas.push(this.pers);
    //Guardaremos los valores en una variable localStorage (lo maneja el navegador)
    localStorage.setItem('Datos', JSON.stringify(this.listaPersonas));
    alert('persona almacenada!')

  };

  limpiar(){
    this.pers.reset();
  }




}


