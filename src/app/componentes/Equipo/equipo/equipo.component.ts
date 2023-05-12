import { Component, inject} from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  Equipo$: Observable<any>;
  updateId!: any;
  id!: string;
  constructor() {

    const collectionInstance = collection(this.firestore, 'Equipos');
    collectionData(collectionInstance, { idField: 'id' }).subscribe(() => {});
    this.Equipo$ = collectionData(collectionInstance, { idField: 'id' });


  }


  action(type: string, index: any, data: any) {
    if (type == 'edit') {
      console.log('Edit')
    } else if (type == 'delete') {
      alert('Are you sure to Delete Data!!!......');
      const docInstance = doc(this.firestore, 'Equipos', index);
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
  }

}



