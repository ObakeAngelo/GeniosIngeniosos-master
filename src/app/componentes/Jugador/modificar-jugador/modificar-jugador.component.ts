import {Component, inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Firestore, collection, collectionData, doc, updateDoc, getDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-modificar-jugador',
  templateUrl: './modificar-jugador.component.html',
  styleUrls: ['./modificar-jugador.component.scss'],
})
export class ModificarJugadorComponent {
  formulario: FormGroup;
  private firestore: Firestore = inject(Firestore);
  private jugador: any;

  public updateId: string = '';

  constructor(public router: Router, private activedRoute: ActivatedRoute) {
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

  ngOnInit(): void {
    this.updateId = this.activedRoute.snapshot.paramMap.get('id') || '';
    if (this.updateId) {
      const jugadorDocRef = doc(this.firestore, 'Jugadores/' + this.updateId);
      getDoc(jugadorDocRef).then((doc) => {
        if (doc.exists()) {
          console.log('Document data:', doc.data());
          this.formulario.setValue(doc.data());
        } else {
          console.warn('No such document!');
        }
      });
    }
  }

  resetForm() {
    this.formulario.reset();
  }

  editData() {
    console.log(this.formulario.value);
    console.log(this.updateId);
    const jugadorDocRef = doc(this.firestore, 'Jugadores/' + this.updateId);
    updateDoc(jugadorDocRef, this.formulario.value).then(() => {
      console.log('Document successfully updated!');
      this.resetForm();
      this.router.navigate(['/jugadores']);
    });
  }
}
