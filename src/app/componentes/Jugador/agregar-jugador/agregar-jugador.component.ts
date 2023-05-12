import {Component, inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Firestore, collection, collectionData, doc, addDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-agregar-jugador',
  templateUrl: './agregar-jugador.component.html',
  styleUrls: ['./agregar-jugador.component.scss'],
})
export class AgregarJugadorComponent {
  formulario: FormGroup;
  public imagenBase64 = '';
  public cargandoImagen = false;
  private firestore: Firestore = inject(Firestore);

  submitted = false;
  isLoading = false;
  constructor(public router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      fotografia: new FormControl(),
      edad: new FormControl(),
      posicion: new FormControl(),
      goles: new FormControl(),
      asistencias: new FormControl(),
      t_amarillas: new FormControl(),
      t_rojas: new FormControl(),
      partidos: new FormControl(),
      equipo_entrada: new FormControl(),
      tipo: new FormControl(),
      sueldo: new FormControl(),
      estado: new FormControl(),
    });
  }

  ngOnInit(): void {}

  addData() {
    const collectionInstance = collection(this.firestore, 'Jugadores');
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
