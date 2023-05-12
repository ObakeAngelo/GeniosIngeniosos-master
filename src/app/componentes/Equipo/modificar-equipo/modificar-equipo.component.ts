import {Component, inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Firestore, collection, collectionData, doc, updateDoc, getDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-modificar-equipo',
  templateUrl: './modificar-equipo.component.html',
  styleUrls: ['./modificar-equipo.component.scss'],
})
export class ModificarEquipoComponent {
  formulario: FormGroup;

  private firestore: Firestore = inject(Firestore);
  private equipo: any;

  public updateId: string = '';

  constructor(public router: Router, private activedRoute: ActivatedRoute) {
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
    });
  }

  ngOnInit(): void {
    this.updateId = this.activedRoute.snapshot.paramMap.get('id') || '';
    if (this.updateId) {
      const equipoDocRef = doc(this.firestore, 'Equipos/' + this.updateId);
      getDoc(equipoDocRef).then((doc) => {
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
    const jugadorDocRef = doc(this.firestore, 'Equipos/' + this.updateId);
    updateDoc(jugadorDocRef, this.formulario.value).then(() => {
      console.log('Document successfully updated!');
      this.resetForm();
      this.router.navigate(['/equipo']);
    });
  }
}
