import { Component,  OnInit, inject, } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from 'src/app/modelos/jugador/jugador.model';
import { Firestore, collection, collectionData, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent {

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  jugadores$: Observable<any>;
  updateId!: any;
  id!: string;
  constructor() {

    const collectionInstance = collection(this.firestore, 'Jugadores');
    collectionData(collectionInstance, { idField: 'id' }).subscribe(() => {});
    this.jugadores$ = collectionData(collectionInstance, { idField: 'id' });
    console.log('jugadores',this.jugadores$)


  }

  action(type: string, index: any, data: any) {
    if (type == 'edit') {
      console.log('Edit')
    } else if (type == 'delete') {
      alert('PAPITO TE VOY A BORRAR!!!......');
      const docInstance = doc(this.firestore, 'Jugadores', index);
      deleteDoc(docInstance)
        .then(() => {
          console.log('Data Deleted');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('Call Wrong Function......');
    }
    this.updateId = index;
    console.log(index)
  }

}




