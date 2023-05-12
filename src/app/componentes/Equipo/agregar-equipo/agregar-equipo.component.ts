import { Component, inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData, doc , addDoc} from '@angular/fire/firestore';
import { Equipo } from 'src/app/modelos/equipo/equipo.model';
@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.scss']
})
export class AgregarEquipoComponent {
  formulario: FormGroup;
  public imagenBase64 = '';
  public cargandoImagen = false;
  private firestore: Firestore = inject(Firestore);

  submitted = false;
  isLoading = false;
  constructor
  (public router: Router)
  {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      rut: new FormControl(),
      correo: new FormControl(),
      contrasena: new FormControl(),
      permisos: new FormControl(),
      sueldo: new FormControl(),
      valor_hora_extra: new FormControl(),
      equipo_entrada: new FormControl(),
      fotografia: new FormControl(),
      extras_realizadas: new FormControl(),
    })
  }


  ngOnInit(): void {

  }

  addData() {
    const collectionInstance = collection(this.firestore, 'Equipos');
    addDoc(collectionInstance, this.formulario.value)
      .then((res) => {
        this.formulario.reset();
      })
      .catch((error) => {
        console.log('Error ====>', error);
      });

    this.formulario.reset();
    this.submitted = false;
    this.isLoading = false;
  }


}
